package response

type ResponseWrapper struct {
	Status int    `json:"status"`
	Err    string `json:"err"`
}

func New(status int, err string) *ResponseWrapper {
	return &ResponseWrapper{status, err}
}
