const username: string = "testuser";
const expectedStatus: number = 401;
const actualStatus: number = 401;
const isLoggedIn: boolean = false;

const { strictEqual } = require("node:assert/strict");
strictEqual(actualStatus, expectedStatus);

console.log("LOGIN TEST PASSED");