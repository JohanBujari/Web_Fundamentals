function displayAlert(element) {
    alert("This page says \n Loading weather report")
}

const getCookies = document.querySelector(".cookies");

function dismiss() {
    getCookies.remove();
}


function c2f(label) {

    return Math.round(9 / 5 * label + 32);

}

function f2c(label) {

    return Math.round(5 / 9 * (label - 32));

}


function chooseTemp(element) {
    for (var i = 1; i < 9; i++) {
        var getTemp = document.querySelector("#label" + i);
        var getTempVal = parseInt(getTemp.innerText);
        if (element.value == "C") {

            getTemp.innerText = f2c(getTempVal);
        }
        else {
            getTemp.innerText = c2f(getTempVal);
        }

    }
}

