import {DirectorySystem} from './directorySystem'
import {ResponseWrapper} from './responseWrapper'


export class DataResponseWrapper{
    responseWrapper:ResponseWrapper=new ResponseWrapper();
    directories:DirectorySystem[]=[];
    timeExecuting:number=0;
}