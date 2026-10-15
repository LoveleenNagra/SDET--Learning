// Day 1: My First TypeScript Assertion Test

const { strictEqual } = require("node:assert/strict");

// Test Case: Verify API response status

const expectedStatus: number = 201;
const actualStatus: number = 201;

// Verify actual status matches expected status

strictEqual(actualStatus, expectedStatus);

console.log("TEST PASSED");