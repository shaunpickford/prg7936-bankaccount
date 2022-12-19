class Transaction {
    constructor(amt, ending) {
        // automatically determine the type
        if (amt < 0) {
            this.type = "Withdrawal";
        } else {
            this.type = "Deposit";
        }
        this.amount = amt;
        this.endingBalance = ending;
    }
}

export default Transaction;