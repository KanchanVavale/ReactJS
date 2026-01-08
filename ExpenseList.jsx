const ExpenseList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li key={transaction.id} className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text}
            <span>₹{transaction.amount}</span>
            <button onClick={() => deleteTransaction(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
