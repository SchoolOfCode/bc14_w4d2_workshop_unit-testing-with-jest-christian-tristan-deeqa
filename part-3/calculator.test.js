import { test, expect } from "@jest/globals";
import {calculate} from './calculator.js';

// For example, you could write a test that checks whether the add function returns 3 when passed 1 and 2 as arguments.
test ("Add Function test", () => {
    const actual = calculate("+", 1 , 2)
    const expected = 3
expect(actual).toBe(expected);
});

test ("Subtract Function test", () => {
    const actual = calculate("-", 10 , 6)
    const expected = 4
expect(actual).toBe(expected);
});

test ("Multiply Function test", () => {
    const actual = calculate("*", 6 , 6)
    const expected = 36
expect(actual).toBe(expected);
});

test ("Divide Function test", () => {
    const actual = calculate("/", 50 , 10)
    const expected = 5
expect(actual).toBe(expected);
});