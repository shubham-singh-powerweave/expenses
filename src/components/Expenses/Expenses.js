import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [selecteYear, setSelectedYear] = useState("2020");
  // let fileteredInfoText = "2019, 2021 & 2022";

  // if (selecteYear === "2019") {
  //   fileteredInfoText = "2020, 2021 & 2022";
  // } else if (selecteYear === "2021") {
  //   fileteredInfoText = "2019, 2020 & 2022";
  // } else {
  //   fileteredInfoText = "2019, 2020 & 2021";
  // }
  const saveYearDataHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selecteYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selecteYear}
          onSaveYearData={saveYearDataHandler}
        ></ExpensesFilter>
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList check={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expenses;
