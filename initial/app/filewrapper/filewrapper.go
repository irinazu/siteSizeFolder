package filewrapper

type FileSystem struct {
	Name string  `json:"name"`
	Size float64 `json:"size"`
}

func New(name string, size float64) *FileSystem {
	return &FileSystem{name, size}
}
