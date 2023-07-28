package handler

import (
	"bytes"
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"math"
	"net/http"
	config "sizesite/initial/app"
	"sizesite/initial/app/dataresponsewrapper"
	"sizesite/initial/app/response"
	"sizesite/initial/app/statisticswrapper"
	dirprocessing "sizesite/server/dirprocessingServer"
	statisticsserver "sizesite/server/statisticsServer"
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

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	dataForSendJson := dataresponsewrapper.New(responseWrapper, generalSliceOfDirectory, durationInSecond)
	a, err := json.Marshal(dataForSendJson)
	if err != nil {
		log.Println(err)
		responseWrapper = response.New(1, err.Error())
	}
	w.Write(a)

	statistics := statisticsserver.MakeStatistics(*dataForSendJson, root)
	postRequestForStatistics(statistics)
}

func postRequestForStatistics(statistics *statisticswrapper.StatisticsWrapper) {
	config := config.CreateConfig()
	url := fmt.Sprintf("http://%s/stat.php", config.IpStat)

	jsonStatistics, err := json.Marshal(statistics)
	if err != nil {
		log.Println(err)
	}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonStatistics))
	if err != nil {
		log.Println(err)
	}
	req.Header.Set("Content-Type", "application/json")
	//req.Header.Set("Access-Control-Allow-Origin", "*")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Println(err)
	}
	defer resp.Body.Close()

	fmt.Println("response Status:", resp.Status)
	fmt.Println("response Headers:", resp.Header)
	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println("response Body:", string(body))
}
