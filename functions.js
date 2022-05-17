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

export { capitalize, reverseString,calculator}