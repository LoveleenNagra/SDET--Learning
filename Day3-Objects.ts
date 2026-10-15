const bankResponse = {
    // Your properties and methods for the bankResponse object go here
    statusCode: 200,
    message: "Transfer successful",
    amount: 750,
    success: true,
};

console.log(bankResponse.statusCode);
console.log(bankResponse.message);
console.log(bankResponse.amount);
console.log(bankResponse.success);


const bankingTests = [
    // Your test objects go here
    {
        testId: "TC01",
        transferAmount: 500,
        expectedResult: true
    },
    {
        testId: "TC02",
        transferAmount: 1500,
        expectedResult: false
    },
    {
        testId: "TC03",
        transferAmount: 0,
        expectedResult: false
    }
];

console.log(bankingTests[0].testId);
console.log(bankingTests[1].transferAmount);
console.log(bankingTests[2].expectedResult);

for (const test of bankingTests) {
    console.log(test.testId);
    console.log(test.transferAmount);
}