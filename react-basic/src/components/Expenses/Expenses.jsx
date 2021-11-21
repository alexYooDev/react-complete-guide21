import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [selYear, setSelYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setSelYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter selected={selYear} onFilterChange={filterChangeHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
