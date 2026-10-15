// Exercise 1E: Working with Objects

const bankResponse = {
    statusCode: 200,
    message: "Transfer successful",
    amount: 750,
    success: true
};

console.log("Status Code:", bankResponse.statusCode);
console.log("Message:", bankResponse.message);
console.log("Amount:", bankResponse.amount);
console.log("Success:", bankResponse.success);


// Exercise 1F: Arrays of Objects

const bankingTests = [
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


// Exercise 1F: Accessing Objects in an Array


console.log(bankingTests[0]?.testId);
console.log(bankingTests[1]?.transferAmount);
console.log(bankingTests[2]?.expectedResult);

// Exercise 1G: Looping Through Test Data

for (const test of bankingTests) {
    console.log("Test ID:", test.testId);
    console.log("Transfer Amount:", test.transferAmount);
}