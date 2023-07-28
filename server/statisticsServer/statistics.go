package statisticsserver

import (
	"fmt"
	"sizesite/initial/app/dataresponsewrapper"
	"sizesite/initial/app/directorywrapper"
	"sizesite/initial/app/statisticswrapper"
	"time"
)

func MakeStatistics(dataForSendJson dataresponsewrapper.DataResponseWrapper, root string) *statisticswrapper.StatisticsWrapper {

	totalsize := countTotalSize(dataForSendJson.Directories)
	totalvalue := countValue(dataForSendJson.Directories)
	currentTime := time.Now()
	time := fmt.Sprintf("%d-%d-%d %d:%d:%d\n",
		currentTime.Year(),
		currentTime.Month(),
		currentTime.Day(),
		currentTime.Hour(),
		currentTime.Second(),
		0,
	)

	return statisticswrapper.New(root, totalsize, totalvalue, dataForSendJson.TimeExecuting, time)
}

func countTotalSize(directories []directorywrapper.DirectorySystem) int {
	totalsize := 0
	for _, dir := range directories {
		totalsize += int(dir.Size)
	}
	return totalsize
}

func countValue(directories []directorywrapper.DirectorySystem) int {
	totalvalue := 0
	for _, dir := range directories {
		totalvalue += len(dir.Files) + 1.
	}
	return totalvalue
}
