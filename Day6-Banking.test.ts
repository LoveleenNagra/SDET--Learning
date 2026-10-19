const { test, describe } = require("node:test");
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
        description: "Valid transfer",
        transferAmount: 500,
        maximumTransfer: 1000,
        isAccountActive: true,
        expectedResult: true
    },
    {
        testId: "TC02",
        description: "Exceeds maximum limit",
        transferAmount: 1500,
        maximumTransfer: 1000,
        isAccountActive: true,
        expectedResult: false
    },
    {
        testId: "TC03",
        description: "Inactive account",
        transferAmount: 500,
        maximumTransfer: 1000,
        isAccountActive: false,
        expectedResult: false
    },
    {
        testId: "TC04",
        description: "Zero transfer amount",
        transferAmount: 0,
        maximumTransfer: 1000,
        isAccountActive: true,
        expectedResult: false
    },
    {
        testId: "TC05",
        description: "Negative transfer amount",
        transferAmount: -100,
        maximumTransfer: 1000,
        isAccountActive: true,
        expectedResult: false
    },
    {
        testId: "TC06",
        description: "Transfer exactly at maximum",
        transferAmount: 1000,
        maximumTransfer: 1000,
        isAccountActive: true,
        expectedResult: true
    }
];

describe("Bank Transfer Tests", () => {

    for (const bankingTest of bankingTests) {
        test(`${bankingTest.testId}: ${bankingTest.description}`, () => {
            const actualResult: boolean = validateTransfer(
                bankingTest.transferAmount,
                bankingTest.maximumTransfer,
                bankingTest.isAccountActive
            );

            strictEqual(actualResult, bankingTest.expectedResult);
        });
    }
    // test("TC01: Valid transfer", () => {
    //     const actualResult: boolean = validateTransfer(500, 1000, true);

    //     strictEqual(actualResult, true);
    // });

    // test("TC02: Exceeds limit", () => {
    //     const actualResult: boolean = validateTransfer(1500, 1000, true);

    //     strictEqual(actualResult, false);
    // });

    // test("TC03: Inactive account", () => {
    //     const actualResult: boolean = validateTransfer(500, 1000, false);

    //     strictEqual(actualResult, false);
    // });

});