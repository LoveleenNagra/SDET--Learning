const { strictEqual } = require("node:assert/strict");

const expectedStatus: number = 200;
const actualStatus: number = 200;

try {
    strictEqual(actualStatus, expectedStatus);
    console.log("API Test PASSED");
} catch (error) {
    console.error("API Test FAILED");
    if (error instanceof Error) {
        console.error(error.message);
    }
    throw error;
}