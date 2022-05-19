import { capitalize,reverseString,calculator,caesarCipher,analyzeArray } from "./functions";

describe('capitalize function',()=>{
    test('capitalizes "test" to be "TEST"',()=>{
    expect(capitalize("test")).toBe("TEST")
}) 
})
describe('reverseString function',()=>{
    test('reverses "The roof is on fire!" to be "!erif no si foor ehT"',()=>{
    expect(reverseString("The roof is on fire!")).toBe("!erif no si foor ehT")
})
})

describe('performs add,subtract,multiply,divide on two numbers',()=>{
    const calc=calculator()
test('add two numbers',()=>{
    expect(calc.add(2,4)).toBe(6)    
})
test('subtract one number from another',()=>{
    expect(calc.subtract(99,8)).toBe(91)
})
test('multiply two numbers',()=>{
    expect(calc.multiply(8,2)).toBe(16)
})
test('divide one number by another',()=>{
    expect(calc.divide(81,9)).toBe(9)
})
})
describe('uses ROT13 cipher to encrypt string',()=>{
    test('convert YOU DID IT!',()=>{
    expect(caesarCipher('YOU DID IT!')).toBe('LBH QVQ VG!')    
    })
    test('convert you did it!',()=>{
        expect(caesarCipher('you did it!')).toBe('lbh qvq vg!')    
        })
})
describe('function that takes an array and returns average, minimum, maximum, and length')
test('test [1,8,3,4,2,6]',()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {
              average: 4,
              min: 1,
              max: 8,
              length: 6
            }
    )
})
