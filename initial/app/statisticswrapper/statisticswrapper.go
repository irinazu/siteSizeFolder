package statisticswrapper

type StatisticsWrapper struct {
	C_path      string  `json:"c_path"`
	C_totalsize int     `json:"c_totalsize"`
	C_count     int     `json:"c_count"`
	C_time      float64 `json:"c_time"`
	C_date      string  `json:"c_date"`
}

func New(c_path string, c_totalsize int, c_count int, c_time float64, c_date string) *StatisticsWrapper {
	return &StatisticsWrapper{c_path, c_totalsize, c_count, c_time, c_date}
}
