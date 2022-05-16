import { capitalize,reverseString } from "./functions";

test('capitalizes "test" to be "TEST"',()=>{
    expect(capitalize("test")).toBe("TEST")
}) 
test('reverses "The roof is on fire!" to be "!erif no si foor ehT"',()=>{
    expect(reverseString("The roof is on fire!")).toBe("!erif no si foor ehT")
})
