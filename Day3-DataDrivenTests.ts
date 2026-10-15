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
const bankingTests = [
    {
        testId: "TC01",
        transferAmount: 500,
        maximumTransfer: 1000,
        isAccountActive: true,
        expectedResult: true
    },
    {
        testId: "TC02",
        transferAmount: 500,
        maximumTransfer: 1000,
        isAccountActive: false,
        expectedResult: false
    },
    {
        testId: "TC03",
        transferAmount: 1500,
        maximumTransfer: 2000,
        isAccountActive: true,
        expectedResult: true
    },
    {
        testId: "TC04",
        transferAmount: 0,
        maximumTransfer: 1000,
        isAccountActive: true,
        expectedResult: false
    }
];
for (const test of bankingTests) {
    const actualResult: boolean = validateTransfer(
        test.transferAmount,
        test.maximumTransfer,
        test.isAccountActive
    );

    // Add your assertion here
    strictEqual(actualResult, test.expectedResult);

    console.log(test.testId + " PASSED");
}