import { useState } from "react";

const ExpenseForm = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const submitHandler = (e) => {
    e.preventDefault();

    const finalAmount =
      type === "income" ? +amount : -amount;

    if (!text || !amount) return;

    addTransaction({
      id: Date.now(),
      text,
      amount: finalAmount,
      type
    });

    setText("");
    setAmount("");
    setType("expense");
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Add Transaction</h3>

      <input
        type="text"
        placeholder="Enter description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

       <div className="type-selector">
        <label>
          <input
            type="radio"
            value="income"
            checked={type === "income"}
            onChange={() => setType("income")}
          />
          Income
        </label>
        <label>
          <input
            type="radio"
            value="expense"
            checked={type === "expense"}
            onChange={() => setType("expense")}
          />
          Expense
        </label>
      </div>

      <button>Add</button>
    </form>
  );
};

export default ExpenseForm;
