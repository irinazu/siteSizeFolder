package main

import (
	"log"
	"net/http"
	config "sizesite/initial/app"
	handler "sizesite/server/handlers"
)

//var globalWg sync.WaitGroup

func main() {

	http.HandleFunc("/public", handler.GetPublicPage)

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))
	http.HandleFunc("/dirSize", handler.GetSizeData)

	config := config.CreateConfig()
	err := http.ListenAndServe(":"+config.Port, nil)
	if err != nil {
		log.Fatal(err)
	}

}

/*
// getMainPage() возвращает шаблон main.html
func getMainPage(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("./static/main/main.html")
	if err != nil {
		log.Fatal(err)
	}
	t.Execute(w, nil)
}

// getPublicPage() возвращает шаблон public.html
func getPublicPage(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("./static/index/index.html")
	if err != nil {
		log.Fatal(err)
	}
	t.Execute(w, nil)
}

// getSizeData() обработчик запроса по пути /dirSize, принимает параметры для нахождения размеров папок
func getSizeData(w http.ResponseWriter, r *http.Request) {
	responseWrapper := response.ResponseWrapper{}

	root := r.URL.Query().Get("root")

	//проверка root
	if root == "" {
		message := "Параметр root пуст"
		log.Println(message)
		responseWrapper.Status = 1
		responseWrapper.Err = message
		return
	}

	generalSliceOfDirectory, err := processingDataFromRequest(root)
	if err != nil {
		log.Println(err)
		responseWrapper.Status = 1
		responseWrapper.Err = err.Error()
		return
	}

	w.Header().Set("Content-Type", "application/json")
	dataForSendJson := dataresponsewrapper.New(responseWrapper, generalSliceOfDirectory)
	a, err := json.Marshal(dataForSendJson)
	if err != nil {
		log.Println(err)
		responseWrapper.Status = 1
		responseWrapper.Err = err.Error()
	}
	w.Write(a)
}

// processingDataFromRequest() обработка данных пришедших от запроса по пути /dirSize
func processingDataFromRequest(root string) ([]directorywrapper.DirectoryWrapper, error) {
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
func checkFile(directories []string) ([]directorywrapper.DirectoryWrapper, error) {
	generalSliceOfDirectory := []directorywrapper.DirectoryWrapper{}

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
func countSizeDirectory(directoryPath string, generalSliceOfDirectory *[]directorywrapper.DirectoryWrapper, i int) error {
	var totalSizeForDirectory float64

	err := filepath.Walk(directoryPath,
		func(path string, info os.FileInfo, err error) error {
			if err != nil {
				log.Println(err)
				return err
			}

			if !info.IsDir() {
				totalSizeForDirectory += (float64(info.Size()) / 1024.0 / 1024.0)
			}
			return nil
		})

	if err != nil {
		log.Println(err)
		return err
	}

	roundSize := math.Round(totalSizeForDirectory*10000) / 10000
	if roundSize == 0.0000 {
		roundSize = 0
	}
	*generalSliceOfDirectory = append(*generalSliceOfDirectory, *directorywrapper.New(i, directoryPath, roundSize))
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
*/
