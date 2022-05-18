import esrever from 'esrever'
function capitalize(string) {
    return string.toUpperCase();
}
function reverseString(string) {
    let reversed=esrever.reverse(string)
    return reversed
}
const calculator=()=>{
    const add=(a,b)=>{
return a+b;
    }
    const subtract=(a,b)=>{
return a-b;
    }
    const multiply=(a,b)=>{
return a*b;
    }
    const divide=(a,b)=>{
return a/b;
    }
return {add,subtract,multiply,divide}
}
//convert to array
function strToArr(string){
return Array.from(string)
}
//check if char is punctuation
function isPunctuation(char){
if (char.charCodeAt(0)>=78 && char.charCodeAt(0)<=90) {
    return false
}
else {
    return true
}
}
function shiftArr(arr){
return arr.map(function(x){
        if (x>=65 && x<=90) {
    if (x>77) {
        return x-13;
    }
    else  {
        return x+13;
    }
        }
        else {
            return x;
        }
    })

}
function getCharCode(char){
return char.charCodeAt(0)
}
function joinArr(arr){
    return arr.join("")
}

function caesarCipher(string){
let strArr=strToArr(string)
let codeArr=strArr.map(x=>x.charCodeAt(0))
let shiftedArr=shiftArr(codeArr)
let newArr= shiftedArr.map(String.fromCharCode(x))
return joinArr(newArr)
}

export { capitalize, reverseString,calculator,isPunctuation}