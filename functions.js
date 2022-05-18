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
//convert array elements to corresponding character codes
function convertArrChars(arr) {
  return arr.map(x=>x.charCodeAt(0))
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
function convertArrCodes(arr) {
   return arr.map(String.fromCharCode(x))
}
function joinArr(arr){
    return arr.join("")
}

function caesarCipher(string){
let strArr=strToArr(string)
let codeArr=convertArrChars(strArr)
let shiftedArr=shiftArr(codeArr)
let newArr= convertArrCodes(shiftedArr)
return joinArr(newArr)
}

export { capitalize, reverseString,calculator,isPunctuation}