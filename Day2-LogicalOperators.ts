const transferAmount: number = 1200;
const maximumTransfer: number = 1000;
const hasSufficientFunds: boolean = true;
const isAccountActive: boolean = true;

const transferAllowed: boolean =
    transferAmount <= maximumTransfer
    && hasSufficientFunds
  && isAccountActive;

