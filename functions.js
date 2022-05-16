import esrever from 'esrever'
function capitalize(string) {
    return string.toUpperCase();
}
function reverseString(string) {
    let reversed=esrever.reverse(string)
    return reversed
}
console.log(reverseString("The roof is on fire!"))
export { capitalize, reverseString}