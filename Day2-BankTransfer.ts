const { strictEqual } = require("node:assert/strict");

function validateTransfer(
    transferAmount: number,
    maximumTransfer: number,
    isAccountActive: boolean
): boolean {
    return transferAmount > 0
        && transferAmount <= maximumTransfer
        && isAccountActive;
}

const result1: boolean = validateTransfer(500, 1000, true);
const result2: boolean = validateTransfer(1200, 1000, true);
const result3: boolean = validateTransfer(500, 1000, false);
const result4: boolean = validateTransfer(0, 1000, true);
const result5: boolean = validateTransfer(1, 1000, true);
const result6: boolean = validateTransfer(999, 1000, true);
const result7: boolean = validateTransfer(1000, 1000, true);
const result8: boolean = validateTransfer(1001, 1000, true);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);

strictEqual(result1, true);
console.log("TC01 PASSED");

strictEqual(result2, false);
console.log("TC02 PASSED");

strictEqual(result3, false);
console.log("TC03 PASSED");

strictEqual(result4, false);
console.log("TC04 PASSED");

strictEqual(result5, true);
console.log("TC05 PASSED");

strictEqual(result6, true);
console.log("TC06 PASSED");

strictEqual(result7, true);
console.log("TC07 PASSED");

strictEqual(result8, false);
console.log("TC08 PASSED"); 