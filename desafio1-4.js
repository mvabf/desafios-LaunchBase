const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type == 'credit') {
        user.balance += transaction.value;
    } else {
        user.balance -= transaction.value;
    }
}

function getHigherTransactionByType(type) {
    let higher = 0;
    let higherTransaction;

    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type == type && user.transactions[i].value > higher) {
            higher = user.transactions[i].value;
        }
    }

    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].value == higher) {
            higherTransaction = user.transactions[i];
        }
    }

    return higherTransaction;
}

function getAverageTransactionValue() {
    let sum = 0;

    for (let i = 0; i < user.transactions.length; i++) {
        sum += user.transactions[i].value;
    }
    return (sum / user.transactions.length).toFixed(2);
}

function getTransactionsCount() {
    let obj = { credit: 0, debit: 0 };

    for (let i = 0; i < user.transactions.length; i++) {
        user.transactions[i].type == 'credit' ? obj.credit++ : obj.debit++;
    }

    return obj;
}



createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());