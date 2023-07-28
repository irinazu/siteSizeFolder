package directorywrapper

import filewrapper "sizesite/initial/app/filewrapper"

type DirectorySystem struct {
	filewrapper.FileSystem
	Files []filewrapper.FileSystem `json:"files"`
}

func New(name string, size float64, files []filewrapper.FileSystem) *DirectorySystem {
	return &DirectorySystem{*filewrapper.New(name, size), files}
}
