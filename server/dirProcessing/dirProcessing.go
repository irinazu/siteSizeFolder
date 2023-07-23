package dirprocessing

import (
	"log"
	"math"
	"os"
	"path/filepath"
	directorywrapper "sizesite/initial/app/directoryWrapper"
	filewrapper "sizesite/initial/app/fileWrapper"
	"sync"
)

var globalWg sync.WaitGroup

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
	generalSliceOfDirectory := []directorywrapper.DirectorySystem{}

	for i, elem := range directories {
		i := i
		globalWg.Add(1)
		//размер подсчитываемой директории
		go func(directoryPath string) {

			defer globalWg.Done()
			err := countSizeDirectory(directoryPath, &generalSliceOfDirectory, i)
			if err != nil {
				log.Println(err)
				return
			}

		}(elem)
	}

	globalWg.Wait()
	return generalSliceOfDirectory, nil
}

// countSizeDirectory() вычисляет размер папки с помощью обхождения внутрь, распределяет по двум срезам: с меньшим лимитом и большим
func countSizeDirectory(directoryPath string, generalSliceOfDirectory *[]directorywrapper.DirectorySystem, i int) error {
	var totalSizeForDirectory float64
	var files []filewrapper.FileSystem
	var id int

	err := filepath.Walk(directoryPath,
		func(path string, info os.FileInfo, err error) error {
			if err != nil {
				log.Println(err)
				return err
			}

			if !info.IsDir() {
				//превращаем в МБ
				certainSize := (float64(info.Size()) / 1024.0 / 1024.0)
				totalSizeForDirectory += certainSize
				//добавляем в список файлов к директории
				files = append(files, *filewrapper.New(id, info.Name(), roundSize(certainSize)))
				id += 1
			}
			return nil
		})

	if err != nil {
		log.Println(err)
		return err
	}

	*generalSliceOfDirectory = append(*generalSliceOfDirectory, *directorywrapper.New(i, directoryPath, roundSize(totalSizeForDirectory), files))
	return nil
}

// writeAllDirectory() принимает корневую папку, записывает все существующие директории в срез, возвращает срез
func writeAllDirectory(root string) ([]string, error) {
	directories := []string{}

	//проверка дирректории на существование
	if _, err := os.Stat(root); os.IsNotExist(err) {
		log.Println(err)
		return nil, err
	}

	err := filepath.Walk(root,
		func(path string, info os.FileInfo, err error) error {
			if err != nil {
				log.Println(err)
				return err
			}

			if info.IsDir() {
				directories = append(directories, path)
			}
			return nil
		})

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
