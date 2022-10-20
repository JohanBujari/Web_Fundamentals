// 1. ALWAYS HUNGRY

function alwaysHungry(arr) {

    for(var i=0; i<arr.length;i++){
        if(arr[i]=="food"){
            console.log("yummy")
        }
     else { 
        console.log("I'am hungry");
    }   
}
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// 2. HIGH PASS FILTER

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// 3. Better than average

function betterThanAverage(arr) {
    var sum = 0;
    var avg;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    avg = sum / arr.length;

    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {

            count++
        }
    }
    
    return count;

}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// 4. Array reverse

function reverse(arr) {
    var arr1 = [];

    for(var i = arr.length -1; i>=0 ; i--){
        arr1.push(arr[i]);
    }

    return arr1;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// Fibonaci numbers

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var number=0; number<n; number++){
        if(fibArr.length == n){
            break;
        }
        fibArr.push(fibArr[number]+fibArr[number+1]);
    }
    
    // your code here
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result);