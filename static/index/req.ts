import {create,deleteFolders} from './el'
import {DataResponseWrapper} from './modul/dataResponseWrapper'
import "./index.css"

let params:any,root:string,sor:string
//основной путь
const ROOTPATH:string="/"

var xhr=new XMLHttpRequest()

let back:string[]=[]
//время запроса
var errorInTime = document.getElementById("errorInTime");
//время запроса
const timeLoad=document.getElementById("timeLoad")
//кнопка движения назад
const backButton = document.getElementById("back");
backButton!.addEventListener("click", backStep, false);
//обозначение дива с текущей директорией
const currentCertainFolder = document.getElementById("currentCertainFolder");

export var dataResponseWrapper=new DataResponseWrapper()

export var f = document.getElementById("f");
export var loader = document.getElementById("loader");

//getAllFolder() получение всех папок через запрос
export function getAllFolder() {    
    root=ROOTPATH
    currentCertainFolder!.innerHTML="Текущая директория: "+root
    params = 'root=' + encodeURIComponent(root);
    getRequest(params)

}

//getCeratainFolderTree() получение папок конкретной папки  через запрос
export function getCeratainFolderTree(e:any) {

    if (back[back.length - 1] != root) {
        back.push(root);
    }
    console.log(back+"FRONT")
    if (e.target.classList.contains('ceratainFolder')) {
        root=e.target.innerHTML

        console.log(root+" NOVAY ROOOT")
        if(back[back.length-1]==root){
            back.pop()
            return
        }
        currentCertainFolder!.innerHTML="Текущая директория: "+root
    }else{return}

    params = 'root=' + encodeURIComponent(root);

    getRequest(params)

}

//getRequest() создаем запрос с переданными параметрами
function getRequest(params:any){
    errorInTime!.style.display="none"
    loader!.style.display="block"
    f!.style.display="block"

    xhr.open("GET", "/dirSize?" + params, true);
    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && xhr.status == 200) {
            dataResponseWrapper = JSON.parse(xhr.responseText);
            console.log(dataResponseWrapper)
            if(dataResponseWrapper.responseWrapper.status==1){
                console.log(root+ " :root do")
                console.log(back+ " :back do")

                root=back[back.length-1]
                back.pop()
                console.log(root+ " :root posle")
                console.log(back+ " :back posle")

                currentCertainFolder!.innerHTML = "Текущая директория: " + root;
                errorInTime!.innerHTML=dataResponseWrapper.responseWrapper.err
                errorInTime!.style.display="block"
                console.log(dataResponseWrapper.responseWrapper.err);
                loader!.style.display="none"
                f!.style.display="none"
                return "error";
            }
            if(dataResponseWrapper.directories.length==0){
                root=back[back.length-1]
                back.pop()
                currentCertainFolder!.innerHTML = "Текущая директория: " + root;
                errorInTime!.innerHTML="Папка пуста"
                errorInTime!.style.display="block"

                console.log("папка пуста");
                loader!.style.display="none"
                f!.style.display="none"
                return "error";
            }
            sortingFolders()
        }
      };
      xhr.send(params);
}


//sorting() сортировка по указанному типу
function sortingFolders(){
    deleteFolders()

    sor = (<HTMLInputElement>document.querySelector('input[name="typeSorting"]:checked'))!.value;

    dataResponseWrapper.directories.sort((a, b) => a.size - b.size);
    dataResponseWrapper.directories.forEach(function(element) {
        if(element.files!=null){
            element.files.sort((a, b) => a.size - b.size);        
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

//backStep() шаг назад
export function backStep() {
    if (back.length != 0) {
        console.log(back+" DO")

        root = back.pop()!;
        console.log(back+" POSLE")

        currentCertainFolder!.innerHTML = "Текущая директория: " + root;
        params = 'root=' + encodeURIComponent(root);
        getRequest(params);
    }
}
//добавление слушателя загрузки сраницы для проверки изменения кнопок radioButton и вывода корневых папок
window.addEventListener('load', () => {
    initRadioButton()
    getAllFolder()
});

//initRadioButton() проверки изменения кнопок radioButton
export function initRadioButton(){
    document.querySelectorAll('input[name="typeSorting"]').forEach((elem) => {
        elem.addEventListener("change", sortingFolders);
    });
}