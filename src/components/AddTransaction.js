import { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-controle">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text.."
          />
        </div>
        <div className="form-controle">
          <label htmlFor="amount">
            Amount <br />
            (negative - expese, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount.."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};
