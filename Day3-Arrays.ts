const statusCodes: number[] = [200, 201, 400, 401, 404];

console.log(statusCodes[0]);
console.log(statusCodes[2]);
console.log(statusCodes[4]);
console.log(statusCodes[5]);

const apiStatusCodes: number[] = [200, 201, 400];

console.log("Initial length:", apiStatusCodes.length);

apiStatusCodes.push(401);
apiStatusCodes.push(404);

console.log("Updated length:", apiStatusCodes.length);
console.log("New status 1:", apiStatusCodes[3]);
console.log("New status 2:", apiStatusCodes[4]);

const responseCodes: number[] = [200, 201, 400, 404];

responseCodes[1] = 202;
responseCodes[3] = 500;

console.log("Updated code 1:", responseCodes[1]);
console.log("Updated code 2:", responseCodes[3]);
console.log("Array length:", responseCodes.length);