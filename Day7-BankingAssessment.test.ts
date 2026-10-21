const { test, describe } = require("node:test");
const { strictEqual } = require("node:assert/strict");

function validateWithdrawal(
    withdrawalAmount: number,
    accountBalance: number,
    dailyLimit: number,
    isAccountActive: boolean
): boolean {
    return withdrawalAmount > 0
        && withdrawalAmount <= accountBalance
        && withdrawalAmount <= dailyLimit
        && isAccountActive === true;
}

interface WithdrawalTestCase {
    testId: string;
    description: string;
    withdrawalAmount: number;
    accountBalance: number;
    dailyLimit: number;
    isAccountActive: boolean;
    expectedResult: boolean;
}

const withdrawalTests: WithdrawalTestCase[] = [
    {
        testId: "TC01",
        description: "Valid withdrawal",
        withdrawalAmount: 200,
        accountBalance: 1000,
        dailyLimit: 500,
        isAccountActive: true,
        expectedResult: true
    },
    {
        testId: "TC02",
        description: "Invalid withdrawal - amount exceeds balance",
        withdrawalAmount: 1200,
        accountBalance: 1000,
        dailyLimit: 1500,
        isAccountActive: true,
        expectedResult: false
    },
    {
        testId: "TC03",
        description: "Invalid withdrawal - amount exceeds daily limit",
        withdrawalAmount: 600,
        accountBalance: 1000,
        dailyLimit: 500,
        isAccountActive: true,
        expectedResult: false
    },
    {
        testId: "TC04",
        description: "Invalid withdrawal - account is inactive",
        withdrawalAmount: 200,
        accountBalance: 1000,
        dailyLimit: 500,
        isAccountActive: false,
        expectedResult: false
    },
    {
        testId: "TC05",
        description: "Invalid withdrawal - zero amount",
        withdrawalAmount: 0,
        accountBalance: 1000,
        dailyLimit: 500,
        isAccountActive: true,
        expectedResult: false
    },
    {
        testId: "TC06",
        description: "Negative withdrawal",
        withdrawalAmount: -50,
        accountBalance: 1000,
        dailyLimit: 500,
        isAccountActive: true,
        expectedResult: false
    },
    {
        testId: "TC07",
        description: "Exactly equal to balance",
        withdrawalAmount: 1000,
        accountBalance: 1000,
        dailyLimit: 1000,
        isAccountActive: true,
        expectedResult: true
    },
    {
        testId: "TC08",
        description: "Exactly equal to daily limit",
        withdrawalAmount: 500,
        accountBalance: 1000,
        dailyLimit: 500,
        isAccountActive: true,
        expectedResult: true
    },
    {
        testId: "TC09",
        description: "Just above daily limit",
        withdrawalAmount: 501,
        accountBalance: 1000,
        dailyLimit: 500,
        isAccountActive: true,
        expectedResult: false
    }
];
describe("Withdrawal Validation Tests", () => {

    for (const ValidateWithdrawal of withdrawalTests) {
        test(`${ValidateWithdrawal.testId}: ${ValidateWithdrawal.description}`, () => {
            const actualResult: boolean = validateWithdrawal(
                ValidateWithdrawal.withdrawalAmount,
                ValidateWithdrawal.accountBalance,
                ValidateWithdrawal.dailyLimit,
                ValidateWithdrawal.isAccountActive
            );

            strictEqual(actualResult, ValidateWithdrawal.expectedResult);
        });
    }
});