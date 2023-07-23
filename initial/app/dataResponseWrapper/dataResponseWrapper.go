package dataresponsewrapper

import (
	directorywrapper "sizesite/initial/app/directoryWrapper"
	"sizesite/initial/app/response"
)

type DataResponseWrapper struct {
	ResponseWrapper response.ResponseWrapper           `json:"responseWrapper"`
	Directories     []directorywrapper.DirectorySystem `json:"directories"`
}

func New(responseWrapper response.ResponseWrapper, directories []directorywrapper.DirectorySystem) *DataResponseWrapper {
	return &DataResponseWrapper{responseWrapper, directories}
}
