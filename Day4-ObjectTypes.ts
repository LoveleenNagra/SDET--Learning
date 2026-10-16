// const loginResponse: {
//     statusCode: number;
//     message: string;
//     success: boolean;
//     userId: number;
// } = {
//     statusCode: 200,
//     message: "Login successful",
//     success: true,
//     userId: 101
// };

// console.log(loginResponse.statusCode);
// console.log(loginResponse.userId);
const { strictEqual } = require("node:assert/strict");

interface LoginResponse {
    statusCode: number;
    message: string;
    success: boolean;
    userId?: number;
}

const loginResponse: LoginResponse = {
    statusCode: 200,
    message: "Login successful",
    success: true,
    userId: 101
};

const secondLoginResponse: LoginResponse = {
    statusCode: 200,
    message: "Login successful",
    success: true,
    userId: 102
};
const failedLoginResponse: LoginResponse = {
    statusCode: 401,
    message: "Invalid credentials",
    success: false,
};

console.log(secondLoginResponse.userId);
console.log(failedLoginResponse.statusCode);
console.log(failedLoginResponse.success);
console.log(failedLoginResponse.userId);

strictEqual(loginResponse.statusCode, 200);
console.log("TC01 PASSED");

strictEqual(loginResponse.userId, 101);
console.log("TC02 PASSED");

strictEqual(failedLoginResponse.statusCode, 401);
console.log("TC03 PASSED");

strictEqual(failedLoginResponse.userId, undefined);
console.log("TC04 PASSED");

strictEqual(typeof loginResponse.statusCode, "number");
console.log("TC05 PASSED");

strictEqual(typeof loginResponse.message, "string");
console.log("TC06 PASSED");

strictEqual(typeof loginResponse.success, "boolean");
console.log("TC07 PASSED");