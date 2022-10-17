import ExpenseItem from "./components/Expense/ExpenseItem";
import './components/Expense/Expenses.css'
function App() {

  const expenses = [
    {
      id: '1',
      title: "Car Insurance",
      amount: 345.23,
      date: new Date(2022, 2, 28),
    },
    {
      id: '2',
      title: "Toilet Paper",
      amount: 315.23,
      date: new Date(2022, 3, 28),
    }
  ];

  return (
    <div className="expenses">
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
    </div>
  );
}

export default App;
