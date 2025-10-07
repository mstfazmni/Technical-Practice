// Given an array of orders, where each order has a customerId, date, and total, return the most recent order for each customer.
const orders = [
  { customerId: 1, date: "2023-09-01T10:00:00Z", total: 50 },
  { customerId: 2, date: "2023-09-02T12:00:00Z", total: 30 },
  { customerId: 1, date: "2023-09-05T09:00:00Z", total: 40 },
  { customerId: 2, date: "2023-08-30T08:00:00Z", total: 20 }
]
function recentOrderPerCustomer (orders) {

    const recentOrder = orders.reduce((acc, order) => {
        const { customerId, date } = order;

        if (acc[customerId]) {
            if (new Date(date) > new Date(acc[customerId].date)) {
                acc[customerId] = order;
            }
        } else {
            acc[customerId] = order;
        }  

        return acc;
    }, {})

    return recentOrder;
    
}

console.log(recentOrderPerCustomer(orders));