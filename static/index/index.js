var xhr=new XMLHttpRequest()

var root,sor,params
let back=[]

//основной путь
const URLPATH='http://localhost:8080/dirSize?'
const ROOTPATH="C:/Users/IraZ/OneDrive/Рабочий стол/GolangProject"

//кнопка вывода всех папок из корня
const buttonGetAllFolder = document.getElementById("allFolder");
buttonGetAllFolder.addEventListener("click", getAllFolder, false);

//кнопка движения назад
const backButton = document.getElementById("back");
backButton.addEventListener("click", backStep, false);

//обозначение дива с текущей директорией
const currentCertainFolder = document.getElementById("currentCertainFolder");

function DataResponseWrapper(directories,responseWrapper) {
    this.directories = directories;
    this.responseWrapper = responseWrapper;
}

var dataResponseWrapper=new DataResponseWrapper()

//getAllFolder() получение всех папок через запрос
function getAllFolder() {    
    root=ROOTPATH
    currentCertainFolder.innerHTML="Текущая директория: "+root
    params = 'root=' + encodeURIComponent(root);
    getRequest(params)
}

//getAllFolder() получение всех папок через запрос
function getCeratainFolderTree(e) {

    back.push(root);

    if (e.target.classList.contains('ceratainFolder')) {
        root=e.target.innerHTML
        if(back[back.length-1]==root){
            back.pop()
            return
        }
        currentCertainFolder.innerHTML="Текущая директория: "+root
    }else{return}

    params = 'root=' + encodeURIComponent(root);

    getRequest(params)
}

function getRequest(params){
    xhr.open("GET", URLPATH + params, true);
    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && xhr.status == 200) {
            dataResponseWrapper = JSON.parse(xhr.responseText);
            console.log(dataResponseWrapper)
            if(dataResponseWrapper.responseWrapper.status==1){
                console.log(dataResponseWrapper.responseWrapper.err)
                return
            }
            if(dataResponseWrapper.directories.length==0){
                console.log("папка пуста")
                return
            }
            sortingFolders()
        }
      };
      xhr.send(params);
}

function getCeratainFilesBlock(e) {
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
function create(){
    const parentDivFolderHolder = document.getElementById("wrapper");
    let divFolderHolder = document.createElement("div")
    divFolderHolder.id = "folders";
    parentDivFolderHolder.append(divFolderHolder);

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
        
        divFolderSize.append(element.size)
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
                divFileSize.append(file.size)
                wrapperDivFile.append(divFileSize);
            })

            divFolderHolder.append(filesDiv);
        }else{
            imgArrow.className="arrowSignHidden"
        }

      });
}

//deleteFolders() предварительное удаление папок
function deleteFolders(){
    var folders = document.getElementById("folders");
    if(folders!=undefined){
        folders.parentNode.removeChild(folders);
    }
}

//sorting() сортировка по указанному типу
function sortingFolders(){
    deleteFolders()

    sor = document.querySelector('input[name="typeSorting"]:checked').value;

    dataResponseWrapper.directories.sort((a, b) => a.id - b.id);
    dataResponseWrapper.directories.forEach(function(element) {
        if(element.files!=null){
            element.files.sort((a, b) => a.id - b.id);        
        }
    })

    if(sor=="desc"){
        dataResponseWrapper.directories.reverse();
        dataResponseWrapper.directories.forEach(function(element) {
            if(element.files!=null){
                element.files.reverse();
            }
        })
    }
    create()
}

//добавление слушателя загрузки сраницы для проверки изменения кнопок radioButton и вывода корневых папок
window.addEventListener('load', () => {
    initRadioButton()
    getAllFolder()

});

//initRadioButton() проверки изменения кнопок radioButton
function initRadioButton(){
    document.querySelectorAll('input[name="typeSorting"]').forEach((elem) => {
        elem.addEventListener("change", sortingFolders);
    });
}

//backStep() шаг назад
function backStep(){
    if(back.length!=0){
        root=back.pop()
        currentCertainFolder.innerHTML="Текущая директория: "+root
        params = 'root=' + encodeURIComponent(root);
        getRequest(params)
    }
}
