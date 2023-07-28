package dirprocessing

import (
	"log"
	"math"
	"os"
	"path/filepath"
	"sizesite/initial/app/directorywrapper"
	"sizesite/initial/app/filewrapper"
	"sync"
)

var globalWg sync.WaitGroup
var mu sync.Mutex

// processingDataFromRequest() обработка данных пришедших от запроса по пути /dirSize
func ProcessingDataFromRequest(root string) ([]directorywrapper.DirectorySystem, error) {
	//записываем все существующие директории от корня
	allDirectories, err := writeAllDirectory(root)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	//находим размер директорий, вкладываем в общий срез
	generalSliceOfDirectory, err := checkFile(allDirectories)

	if err != nil {
		log.Println(err)
		return nil, err
	}

	return generalSliceOfDirectory, nil
}

// checkFile() создает срезы для распределения, передает многопоточное управление по вычичлению размера
func checkFile(directories []string) ([]directorywrapper.DirectorySystem, error) {
	mu.Lock()
	generalSliceOfDirectory := []directorywrapper.DirectorySystem{}
	mu.Unlock()
	for elem := range directories {
		globalWg.Add(1)
		//размер подсчитываемой директории
		go func(directoryPath string) {

			defer globalWg.Done()
			err := countSizeDirectory(directoryPath, &generalSliceOfDirectory)
			if err != nil {
				log.Println(err)
				return
			}

		}(directories[elem])
	}

	globalWg.Wait()
	return generalSliceOfDirectory, nil
}

// countSizeDirectory() вычисляет размер папки с помощью обхождения внутрь, распределяет по двум срезам: с меньшим лимитом и большим
func countSizeDirectory(directoryPath string, generalSliceOfDirectory *[]directorywrapper.DirectorySystem) error {
	var totalSizeForDirectory float64
	var files []filewrapper.FileSystem

	err := filepath.Walk(directoryPath,
		func(path string, info os.FileInfo, err error) error {
			if err != nil {
				log.Println(err)
				return err
			} else if !info.IsDir() {
				//превращаем в МБ
				certainSize := (float64(info.Size()) / 1024.0 / 1024.0)
				totalSizeForDirectory += certainSize
				//добавляем в список файлов к директории
				files = append(files, *filewrapper.New(info.Name(), roundSize(certainSize)))
			}

			return nil
		})

	if err != nil {
		log.Println(err)
		//return err
	}

	*generalSliceOfDirectory = append(*generalSliceOfDirectory, *directorywrapper.New(directoryPath, roundSize(totalSizeForDirectory), files))
	return nil
}

// writeAllDirectory() принимает корневую папку, записывает все существующие директории в срез, возвращает срез
func writeAllDirectory(root string) ([]string, error) {
	directories := []string{}

	//проверка дирректории на существование
	_, errStat := os.Stat(root)
	if errStat != nil {
		log.Println(errStat)
		return directories, errStat
	}
	if os.IsNotExist(errStat) {
		log.Println(errStat)
		return nil, errStat
	}

	/*err := filepath.Walk(root,
	func(path string, info os.FileInfo, err error) error {
		if err != nil {
			log.Println(err)
			//return err
		} else {
			if info.IsDir() {
				fmt.Println(path)
				directories = append(directories, path)
			}
		}
		return nil
	})*/

	entries, err := os.ReadDir(root)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	for _, dir := range entries {

		if root == "/" {
			directories = append(directories, root+dir.Name())
		} else {
			directories = append(directories, root+"/"+dir.Name())
		}
	}

	if err != nil {
		log.Println(err)
		return directories, err
	}

	return directories, nil
}

// roundSize() округляет размеры
func roundSize(size float64) float64 {
	sizeForReturn := math.Round(size*10000) / 10000
	if sizeForReturn == 0.0000 {
		sizeForReturn = 0
	}
	return sizeForReturn
}
