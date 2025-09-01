import { describe, expect, test } from "vitest";
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";

describe("Find Max Value Tests", function () {
  test("Find Max Value - test 1", function () {
    const result = findMaxValue([3, 7, 2, 8, 5]);
    const expectedResult = 8;
    expect(result).toBe(expectedResult);
  });

  test("Find Max Value - test 2", function () {
    const result = findMaxValue([]);
    const expectedResult = null;
    expect(result).toBe(expectedResult);
  });

  test("Find Max Value - test 3", function () {
    const result = findMaxValue([-10, -5, -1]);
    const expectedResult = -1;
    expect(result).toBe(expectedResult);
  });

  test("Find Max Value - test 4", function () {
    const result = findMaxValue("not an array");
    const expectedResult = null;
    expect(result).toBe(expectedResult);
  });
});

describe("Testing Factorial", function () {
  test("Factorial Test 1", function () {
    const result = factorial(5);
    const expectedResult = 120;
    expect(result).toBe(expectedResult);
  });

  test("Factorial Test 2", function () {
    const result = factorial(0);
    const expectedResult = 1;
    expect(result).toBe(expectedResult);
  });

  test("Factorial Test 3", function () {
    const result = factorial(-3);
    const expectedResult = null;
    expect(result).toBe(expectedResult);
  });

  test("Factorial Test 4", function () {
    const result = factorial(5);
    const expectedResult = null;
    expect(result).toBe(expectedResult);
  });
});

describe("Testing: Are Arrays Equal", function () {
  test("areArraysEqual - test 1", function () {
    const result = areArraysEqual([1, 2, 3], [1, 2, 3]);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  test("areArraysEqual - test 2", function () {
    const result = areArraysEqual([1, 2, 3], [3, 2, 1]);
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });

  test("areArraysEqual - test 3", function () {
    const result = areArraysEqual([], []);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  test("areArraysEqual - test 4", function () {
    const result = areArraysEqual([1, 2], [1, 2, 3]);
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });
});

describe("Testing: To Title Case", function () {
  test("To Title Case - Test 1", function () {
    const result = toTitleCase("hello world");
    const expectedResult = "Hello World";
    expect(result).toBe(expectedResult);
  });

  test("To Title Case - Test 2", function () {
    const result = toTitleCase("JAVASCRIPT IS FUN");
    const expectedResult = "Javascript Is Fun";
    expect(result).toBe(expectedResult);
  });

  test("To Title Case - Test 3", function () {
    const result = toTitleCase("123 testing titles");
    const expectedResult = "123 Testing Titles";
    expect(result).toBe(expectedResult);
  });

  test("To Title Case - Test 4", function () {
    const result = toTitleCase(12345);
    const expectedResult = "";
    expect(result).toBe(expectedResult);
  });
});
