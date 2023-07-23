package filewrapper

type FileSystem struct {
	Id   int     `json:"id"`
	Name string  `json:"name"`
	Size float64 `json:"size"`
}

func New(id int, name string, size float64) *FileSystem {
	return &FileSystem{id, name, size}
}
