import fibonacci from "/src/index.js";

test("Fibonacci up until 8 digit", () => {
    expect(fibonacci(8).toBe("0, 1, 1, 2, 3, 5, 8, 13"))
})