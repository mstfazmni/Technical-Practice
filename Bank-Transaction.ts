enum TransactionType {
  Deposit = "Deposit",
  Withdrawal = "Withdrawal",
  Transfer = "Transfer",
  Payment = "Payment"
}

enum TransactionStatus {
    Pending = "Pending",
    Completed = "Completed",
    Failed = "Failed"
}

interface Transaction {
    id: string,
    type: TransactionType,
    amount: number,
    currency: string,
    status: TransactionStatus,
    createdAt?: Date,
    completedAt?: Date,
    notes?: string
}

enum AccountType {
    Checking = "Checking",
    Savings = "Savings",
    Credit = "Credit"
}

interface UserAccount {
    accountId: string,
    ownerName: string,
    balance: number,
    type: AccountType,
    transactions: Transaction[]
}


function displayVar (param: Transaction) {
    return `id: ${param.id} - type: ${param.type} - amount: ${param.amount} - currency: ${param.currency} - status: ${param.status}`;
}

function generateId () {
    return `txn_${Math.floor(Math.random() * 1000)}`;
}

const transaction1: Transaction = {
    id: generateId(),
    type: TransactionType.Payment,
    amount: 120,
    currency: "Dollar",
    status: TransactionStatus.Completed,
}

console.log(displayVar(transaction1));