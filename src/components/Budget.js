import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { dispatch, budget, remaining, expenses, currency } =
    useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const handleBudgetChange = (event) => {
    const newBudget = parseInt(event);

    if (newBudget >= 20000) {
      alert("The value cannot exceed remaining funds £" + remaining);
    } else if (newBudget < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: newBudget,
      });
    }
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        required="required"
        type="number"
        id="budget"
        value={budget}
        step={10}
        max={20000}
        style={{ marginLeft: "2rem", size: 10 }}
        onInput={(event) => handleBudgetChange(event.target.value)}
      ></input>
    </div>
  );
};
export default Budget;
