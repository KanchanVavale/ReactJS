const Summary = ({ transactions }) => {
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <div className="summary">
      <div>
        <h4>Income</h4>
        <p className="money plus">₹{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">₹{Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default Summary;
