package handler

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"
	dataresponsewrapper "sizesite/initial/app/dataResponseWrapper"
	"sizesite/initial/app/response"
	dirprocessing "sizesite/server/dirProcessing"
)

// getMainPage() возвращает шаблон main.html
func GetMainPage(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("./static/main/main.html")
	if err != nil {
		log.Fatal(err)
	}
	t.Execute(w, nil)
}

// getPublicPage() возвращает шаблон public.html
func GetPublicPage(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("./static/index/index.html")
	if err != nil {
		log.Fatal(err)
	}
	t.Execute(w, nil)
}

// getSizeData() обработчик запроса по пути /dirSize, принимает параметры для нахождения размеров папок
func GetSizeData(w http.ResponseWriter, r *http.Request) {
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

	generalSliceOfDirectory, err := dirprocessing.ProcessingDataFromRequest(root)
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
