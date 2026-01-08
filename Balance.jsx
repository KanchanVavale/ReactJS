const Balance = ({ transactions }) => {
  const total = transactions.reduce((sum, transaction) => sum + transaction.amount,0);

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h2>₹{total.toFixed(2)}</h2>
    </div>
  );
};

export default Balance;
