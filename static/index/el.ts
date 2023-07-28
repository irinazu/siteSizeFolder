import {getAllFolder,getCeratainFolderTree,backStep,dataResponseWrapper,f,loader } from './req'

//кнопка вывода всех папок из корня
const buttonGetAllFolder = document.getElementById("allFolder");
buttonGetAllFolder!.addEventListener("click", getAllFolder, false);

//кнопка движения назад
var backButton = document.getElementById("back");
backButton!.addEventListener("click", backStep, false);
//время запроса
var timeLoad = document.getElementById("timeLoad");

//getCeratainFilesBlock() находим стрелку по которой кликнули
function getCeratainFilesBlock(e:any) {
    if (e.target.classList.contains('arrowSign')) {
        if(e.target.parentNode.parentNode.nextSibling.style.display=="block"){
            e.target.parentNode.parentNode.nextSibling.style.display="none"
            e.target.style.transform="rotate(0deg)"
        }else{
            e.target.parentNode.parentNode.nextSibling.style.display="block"  
            e.target.style.transform="rotate(3.142rad)"  
        }
    }
}

//create() создание нод для отражения папок на странице
export function create(){
    const parentDivFolderHolder = document.getElementById("wrapper");
    let divFolderHolder = document.createElement("div")
    divFolderHolder.id = "folders";
    parentDivFolderHolder!.append(divFolderHolder);

    dataResponseWrapper.directories.forEach(function(element) {
        let wrapperDivFolder = document.createElement("div")
        wrapperDivFolder.className="wrapperDivFolder";

        //блок обертка для изображения и самого пути
        let wrapperDivFolderAndImg = document.createElement("div")
        wrapperDivFolderAndImg.className="wrapperDivFolderAndImg";
        wrapperDivFolder.append(wrapperDivFolderAndImg);

        //прописывание изображения-стрелки
        let imgArrow = document.createElement('img');
        imgArrow.src ='/static/index/img/arrowIcon.png';
        wrapperDivFolderAndImg.append(imgArrow);

        //прописывание изображения
        let img = document.createElement('img');
        img.src ='/static/index/img/folderIcon.png';
        wrapperDivFolderAndImg.append(img);
        img.className="folderSign"

        //прописывание пути папки
        let divFolder = document.createElement("div")
        divFolder.className = "ceratainFolder";
        divFolder.append(element.name)
        divFolder.addEventListener('click', getCeratainFolderTree);
        wrapperDivFolderAndImg.append(divFolder);

        //прописывание размер папки
        let divFolderSize = document.createElement("div")
        divFolderSize.className = "ceratainFolderSize";
        
        divFolderSize.append(element.size.toString())
        wrapperDivFolder.append(divFolderSize);

        divFolderHolder.append(wrapperDivFolder)

        if(element.files!=null){
            imgArrow.className="arrowSign"
            imgArrow.addEventListener("click",getCeratainFilesBlock)

            let filesDiv = document.createElement("div")
            filesDiv.className="files";

            element.files.forEach(function(file) {
                let wrapperDivFile = document.createElement("div")
                wrapperDivFile.className="wrapperDivFile";
                filesDiv.append(wrapperDivFile)

                //блок обертка для изображения и самого пути
                let wrapperDivFileAndImg = document.createElement("div")
                wrapperDivFileAndImg.className="wrapperDivFileAndImg";
                wrapperDivFile.append(wrapperDivFileAndImg);

                 //прописывание изображения
                let imgFile = document.createElement('img');
                imgFile.src ='/static/index/img/fileIcon.png';
                wrapperDivFileAndImg.append(imgFile);
                imgFile.className="fileSign"

                //прописывание пути папки
                let divFile = document.createElement("div")
                divFile.className = "certainFile";
                divFile.append(file.name)
                wrapperDivFileAndImg.append(divFile);

                //прописывание размер папки
                let divFileSize = document.createElement("div")
                divFileSize.className = "certainFileSize";
                divFileSize.append(file.size.toString())
                wrapperDivFile.append(divFileSize);
            })

            divFolderHolder.append(filesDiv);
        }else{
            imgArrow.className="arrowSignHidden"
        }
      });


    timeLoad!.innerHTML=dataResponseWrapper.timeExecuting.toString()

    loader!.style.display="none"
    f!.style.display="none"
}

//deleteFolders() предварительное удаление папок
export function deleteFolders(){
    var folders = document.getElementById("folders");
    if(folders!=undefined){
        folders.parentNode!.removeChild(folders);
    }
}


