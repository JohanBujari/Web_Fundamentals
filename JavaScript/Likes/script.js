var count = 3;

var countElement = document.querySelector("h2");

function increase(){
    count++;
    countElement.innerText= count + "like(s)";
    console.log(count)
}

