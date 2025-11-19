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



function displayVar (param: Transaction) {
    return `id: ${param.id} - type: ${param.type} - amount: ${param.amount} - currency: ${param.currency} - status: ${param.status}`;
}


const transaction1: Transaction = {
    id: "Food",
    type: TransactionType.Payment,
    amount: 120,
    currency: "Dollar",
    status: TransactionStatus.Completed,
}

console.log(displayVar(transaction1));