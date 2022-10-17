var getEditProfile = document.querySelector(".user h1");

var requestsCount= document.querySelector("#requestss");
var requestsCount1= document.querySelector("#requestsss");


function changeName(){
    getEditProfile.innerText = "Johan Doe";
}

function accept(id){
    var element = document.querySelector(id);
    element.remove();
    requestsCount.innerText--;
    requestsCount1.innerText++;
    
}

function ignore(id){
    var element = document.querySelector(id);
    element.remove();
    requestsCount.innerText--;
    
}