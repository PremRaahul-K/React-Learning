import ExpenseFilter from "./ExpenseFilter";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import ExpenseTrackerTable from "./ExpenseTrackerTable";
import { useState } from "react";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Groceries",
      amount: 100,
      category: "Food",
    },
    {
      id: 2,
      description: "Gas",
      amount: 40,
      category: "Transportation",
    },
    {
      id: 3,
      description: "Milk",
      amount: 30,
      category: "Food",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseTrackerForm
          onSubmit={(expense) => {
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
          }}
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          selectedCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseTrackerTable
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
};

export default ExpenseTracker;
