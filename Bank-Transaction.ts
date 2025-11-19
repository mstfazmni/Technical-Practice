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
    createdAt: Date,
    completedAt?: Date,
    notes?: string
}