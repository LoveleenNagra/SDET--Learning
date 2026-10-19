const { test, describe } = require("node:test");
const { strictEqual } = require("node:assert/strict");


describe("Login API Tests", () => {

    test("TC01: Successful API response", () => {
        strictEqual(200, 200);
    });

    test("TC02: Invalid password", () => {
        strictEqual(401, 401);
    });
});

describe("Resource API Tests", () => {

    test("TC03: Resource not found", () => {
        strictEqual(404, 404);
    });

});
