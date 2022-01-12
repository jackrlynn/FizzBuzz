// Checks the fizzBuzz function of fizzbuzz.js
// Author: Jack Lynn

const fizzBuzz = require("./fizzbuzz");

test("Returns proper FizzBuzz values when inputs are correct", () => {

    // Start with typical FizzBuzz values
    expect(fizzBuzz(0, 3, 5)).toBe("FizzBuzz");
    expect(fizzBuzz(1, 3, 5)).toBe("1");
    expect(fizzBuzz(2, 3, 5)).toBe("2");
    expect(fizzBuzz(3, 3, 5)).toBe("Fizz");
    expect(fizzBuzz(4, 3, 5)).toBe("4");
    expect(fizzBuzz(5, 3, 5)).toBe("Buzz");
    expect(fizzBuzz(6, 3, 5)).toBe("Fizz");
    expect(fizzBuzz(7, 3, 5)).toBe("7");
    expect(fizzBuzz(8, 3, 5)).toBe("8");
    expect(fizzBuzz(9, 3, 5)).toBe("Fizz");
    expect(fizzBuzz(10, 3, 5)).toBe("Buzz");
    expect(fizzBuzz(11, 3, 5)).toBe("11");
    expect(fizzBuzz(12, 3, 5)).toBe("Fizz");
    expect(fizzBuzz(13, 3, 5)).toBe("13");
    expect(fizzBuzz(14, 3, 5)).toBe("14");
    expect(fizzBuzz(15, 3, 5)).toBe("FizzBuzz");
    expect(fizzBuzz(16, 3, 5)).toBe("16");

    // FizzBuzz values type 2
    expect(fizzBuzz(0, 2, 7)).toBe("FizzBuzz");
    expect(fizzBuzz(1, 2, 7)).toBe("1");
    expect(fizzBuzz(2, 2, 7)).toBe("Fizz");
    expect(fizzBuzz(3, 2, 7)).toBe("3");
    expect(fizzBuzz(4, 2, 7)).toBe("Fizz");
    expect(fizzBuzz(5, 2, 7)).toBe("5");
    expect(fizzBuzz(6, 2, 7)).toBe("Fizz");
    expect(fizzBuzz(7, 2, 7)).toBe("Buzz");
    expect(fizzBuzz(8, 2, 7)).toBe("Fizz");
    expect(fizzBuzz(9, 2, 7)).toBe("9");
    expect(fizzBuzz(10, 2, 7)).toBe("Fizz");
    expect(fizzBuzz(11, 2, 7)).toBe("11");
    expect(fizzBuzz(12, 2, 7)).toBe("Fizz");
    expect(fizzBuzz(13, 2, 7)).toBe("13");
    expect(fizzBuzz(14, 2, 7)).toBe("FizzBuzz");
    expect(fizzBuzz(15, 2, 7)).toBe("15");
    expect(fizzBuzz(16, 2, 7)).toBe("Fizz");
    expect(fizzBuzz(700, 2, 7)).toBe("FizzBuzz");
});

test("Throws error when input numbers are negative", () => {

    // Test to see if negative inputs are throwing errors
    expect(() => {fizzBuzz(-1, 3, 5)}).toThrow("Test numbers cannot be negative!");
    expect(() => {fizzBuzz(-1, 3, 5)}).toThrow(RangeError);
    expect(() => {fizzBuzz(-2, 3, 5)}).toThrow("Test numbers cannot be negative!");
    expect(() => {fizzBuzz(-2, 3, 5)}).toThrow(RangeError);
    expect(() => {fizzBuzz(-11, 2, 7)}).toThrow("Test numbers cannot be negative!");
    expect(() => {fizzBuzz(-11, 2, 7)}).toThrow(RangeError);
    expect(() => {fizzBuzz(-600, 2, 7)}).toThrow("Test numbers cannot be negative!");
    expect(() => {fizzBuzz(-600, 2, 7)}).toThrow(RangeError);
});

test("Throws error when Fizz and Buzz numbers are negative or 0", () => {

    // Test to see if negative inputs are throwing errors
    expect(() => {fizzBuzz(1, 0, 5)}).toThrow("Fizz and Buzz numbers cannot be negative or 0!");
    expect(() => {fizzBuzz(1, 0, 5)}).toThrow(RangeError);
    expect(() => {fizzBuzz(2, -5, 5)}).toThrow("Fizz and Buzz numbers cannot be negative or 0!");
    expect(() => {fizzBuzz(2, -5, 5)}).toThrow(RangeError);
    expect(() => {fizzBuzz(3, 2, 0)}).toThrow("Fizz and Buzz numbers cannot be negative or 0!");
    expect(() => {fizzBuzz(3, 2, 0)}).toThrow(RangeError);
    expect(() => {fizzBuzz(4, 2, -7)}).toThrow("Fizz and Buzz numbers cannot be negative or 0!");
    expect(() => {fizzBuzz(5, 2, -7)}).toThrow(RangeError);
    expect(() => {fizzBuzz(4, -5, -7)}).toThrow("Fizz and Buzz numbers cannot be negative or 0!");
    expect(() => {fizzBuzz(5, -5, -7)}).toThrow(RangeError);
});

test("Checks to make sure all inputs are integers", () => {

    // Test to see if non-integer inputs are throwing errors
    expect(() => {fizzBuzz(1.5, 2, 5)}).toThrow("Input number should be an integer!");
    expect(() => {fizzBuzz(1.5, 2, 5)}).toThrow(TypeError);
    expect(() => {fizzBuzz("1", 2, 5)}).toThrow("Input number should be an integer!");
    expect(() => {fizzBuzz("1", 2, 5)}).toThrow(TypeError);
    expect(() => {fizzBuzz(1, 2.5, 5)}).toThrow("Fizz and Buzz numbers should be integers!");
    expect(() => {fizzBuzz(1, 2.5, 5)}).toThrow(TypeError);
    expect(() => {fizzBuzz(1, "2", 5)}).toThrow("Fizz and Buzz numbers should be integers!");
    expect(() => {fizzBuzz(1, "2", 5)}).toThrow(TypeError);
    expect(() => {fizzBuzz(1, 2, 5.2)}).toThrow("Fizz and Buzz numbers should be integers!");
    expect(() => {fizzBuzz(1, 2, 5.2)}).toThrow(TypeError);
    expect(() => {fizzBuzz(1, 2, "5")}).toThrow("Fizz and Buzz numbers should be integers!");
    expect(() => {fizzBuzz(1, 2, "5")}).toThrow(TypeError);
});