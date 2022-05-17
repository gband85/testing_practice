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
return string.split("")
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
function shiftChar(code){
return code+13;
}
function getCharCode(char){
return char.charCodeAt(0)
}
function joinArr(arr){
    return arr.join("")
}

export { capitalize, reverseString,calculator,isPunctuation}