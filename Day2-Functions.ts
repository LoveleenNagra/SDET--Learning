// function checkApiStatus(
//     expectedStatus: number,
//     actualStatus: number

// ): void {


//     if (actualStatus === expectedStatus) {
//         console.log("PASS");
//     } else {
//         console.log("FAIL");
// }
// }
// checkApiStatus(200,200);
// checkApiStatus(201,400);
// checkApiStatus(401,401);

function checkApiStatus(
    expectedStatus: number,
    actualStatus: number
): boolean {
    return actualStatus === expectedStatus;
}
const result1: boolean = checkApiStatus(200, 200);
const result2: boolean = checkApiStatus(201, 400);
console.log(result1);
console.log(result2);
