package directorywrapper

import filewrapper "sizesite/initial/app/fileWrapper"

type DirectorySystem struct {
	filewrapper.FileSystem
	Files []filewrapper.FileSystem `json:"files"`
}

func New(id int, name string, size float64, files []filewrapper.FileSystem) *DirectorySystem {
	return &DirectorySystem{*filewrapper.New(id, name, size), files}
}
