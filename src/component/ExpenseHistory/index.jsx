import React, { useState } from "react";

const ExpenseHistory = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Мохито",
      category: "Напиток",
      date: "2024/03/21",
      price: -50000,
    },
    {
      id: 2,
      name: "Мохито",
      category: "Напиток",
      date: "2024/03/21",
      price: -50000,
    },
    {
      id: 3,
      name: "Мохито",
      category: "Напиток",
      date: "2024/03/21",
      price: -50000,
    },
    {
      id: 4,
      name: "Мохито",
      category: "Напиток",
      date: "2024/03/21",
      price: 650000,
    },
    {
      id: 5,
      name: "Мохито",
      category: "Напиток",
      date: "2024/03/21",
      price: 190000,
    },
  ]);

  return (
    <div className="expense-history">
      <h2>History expense</h2>
      <div className="input-row">
        <input type="text" placeholder="Write expense  name..." />
        <select>
          <option value="">Category</option>
          <option value="food">Food</option>
          <option value="transport">Auto</option>
          <option value="drink">Wather</option>
        </select>
        <input type="number" placeholder="Add sum..." />
        <button>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Time</th>
            <th>Sum</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td className={expense.price > 0 ? "positive" : "negative"}>
                {expense.price > 0 ? `+${expense.price}` : expense.price} сум
              </td>
              <td>
                <button>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseHistory;
