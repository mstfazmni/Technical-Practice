// You’re given an array of transactions.
// Each transaction is either a "deposit" or a "withdrawal", with an amount.
// I want you to process them in order and return the running balance after each transaction.

const transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 30 },
    { type: "deposit", amount: 50 }
]

function runningBalanceCalculator (transactions) {
    let balance = 0;
    const balances = [];

    transactions.forEach((t) => {
        // console.log(t) to test
        // if deposti add to balance
        if (t.type === "deposit") {
            balance += t.amount;
            // if withdrawal subtract from balance.
        } else if (t.type === "withdrawal") {
            balance -= t.amount;
            // else throw error.
        } else {
            throw new Error(`Unknown transaction type: ${t.type}`);
        }

        // no overdraw is permitted
        if (balance < 0) {
            throw new Error("Balance cannot be smaller than 0!")
        }
        // add balance to arr
        balances.push(balance);
        
    })
    return balances;
}

console.log(runningBalanceCalculator(transactions));
