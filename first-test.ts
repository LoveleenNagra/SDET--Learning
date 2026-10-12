//const username: string = "Loveleen";
//const expectedStatus: number = 200;
//const actualStatus: number = 401;
//const isLoggedIn: boolean = false;


//if (actualStatus === expectedStatus) {
//    console.log("TEST PASSED");
///} else {
//    console.log("TEST FAILED");
//}


const { strictEqual } = require("node:assert/strict");

const expectedStatus: number = 201;
const actualStatus: number = 201;

strictEqual(actualStatus, expectedStatus);

console.log("TEST PASSED");