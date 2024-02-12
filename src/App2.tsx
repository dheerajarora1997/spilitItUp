import React from 'react';
import { addUser } from './app/usersSlice';
import { addExpense } from './app/expensesSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();

  const users = useSelector(state => state.users.users);
  const expenses = useSelector(state => state.expenses.expenses);

  const handleAddUser = () => {
    dispatch(addUser({ name: 'Alice' }));
  };

  const handleAddExpense = () => {
    dispatch(addExpense({ 
      paidBy: 'user_id_alice',
      amount: 50,
      description: 'Dinner',
      participants: ['user_id_alice', 'user_id_bob']
    }));
  };

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Add User</button>

      <h1>Expenses:</h1>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.description}: ${expense.amount} - [Paid by : {expense.paidBy}] { expense.participants.map((participant)=>{return `${participant},`}) }</li>
        ))}
      </ul>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default App;
