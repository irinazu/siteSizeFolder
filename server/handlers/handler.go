package handler

import (
	"encoding/json"
	"html/template"
	"log"
	"math"
	"net/http"
	"sizesite/initial/app/dataresponsewrapper"
	"sizesite/initial/app/response"
	dirprocessing "sizesite/server/dirprocessingServer"
	"time"
)

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
	w.Header().Set("Access-Control-Allow-Origin", "*")

	start := time.Now()

	responseWrapper := &response.ResponseWrapper{}

	root := r.URL.Query().Get("root")

	//проверка root
	if root == "" {
		message := "Параметр root пуст"
		log.Println(message)
		responseWrapper = response.New(1, message)
		//return
	}

	generalSliceOfDirectory, err := dirprocessing.ProcessingDataFromRequest(root)
	if err != nil {
		log.Println(err)
		responseWrapper = response.New(1, err.Error())
		//return
	}

	durationInSecond := math.Round(time.Since(start).Seconds()*10000) / 10000

	w.Header().Set("Content-Type", "application/json")
	dataForSendJson := dataresponsewrapper.New(responseWrapper, generalSliceOfDirectory, durationInSecond)
	a, err := json.Marshal(dataForSendJson)
	if err != nil {
		log.Println(err)
		responseWrapper = response.New(1, err.Error())
	}
	w.Write(a)
}
