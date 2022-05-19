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
        if ((x>=65 && x<=90)) {
    if (x>77) {
        return x-13;
    }
    else  {
        return x+13;
    }
        }
          else if (x>=97 && x<=122){
            if (x>110) {
              return x-13
            }
  else {
    return x+13
  }
          }
        else {
            return x;
        }
    })

}
function convertArrCodes(arr) {
   return arr.map(x=>String.fromCharCode(x))
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

function analyzeArray(array) {
    let avg=array.reduce(function(prev,curr){
      return curr+prev
    },0)/array.length
    let min=array.sort(function(a,b){
      return a-b;
    })[0]
      let max=array.sort(function(a,b){
      return a-b;
    })[array.length-1]
    let length=array.length
    return {"average": avg,"min":min,"max":max,"length":length}
  }

export { capitalize, reverseString,calculator,caesarCipher,analyzeArray}