package dataresponsewrapper

import (
	"sizesite/initial/app/directorywrapper"
	"sizesite/initial/app/response"
)

type DataResponseWrapper struct {
	ResponseWrapper response.ResponseWrapper           `json:"responseWrapper"`
	Directories     []directorywrapper.DirectorySystem `json:"directories"`
	TimeExecuting   float64                            `json:"timeExecuting"`
}

func New(responseWrapper *response.ResponseWrapper, directories []directorywrapper.DirectorySystem, timeExecuting float64) *DataResponseWrapper {
	return &DataResponseWrapper{*responseWrapper, directories, timeExecuting}
}
