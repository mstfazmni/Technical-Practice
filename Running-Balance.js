// You’re given an array of transactions.
// Each transaction is either a "deposit" or a "withdrawal", with an amount.
// I want you to process them in order and return the running balance after each transaction.

const transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 30 },
    { type: "deposit", amount: 50 }
]

function runningBalanceCalculator () {
    let balance = 0;
    let finalArr = [];

    transactions.forEach((t) => {
        // console.log(t)
        if (t.type === "deposit") {
            balance += t.amount;
        } else if (t.type === "withdrawal") {
            balance -= t.amount;
        }
        console.log(balance);
        finalArr.push(balance);
        console.log(finalArr);
    })
}

runningBalanceCalculator();
