import React from 'react';
import { addUser } from './app/usersSlice';
import { addExpense } from './app/expensesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import './App.scss';


const App = () => {

  const dispatch = useDispatch();
  const example = useSelector(state => state.example);
  const users = useSelector(state => state.users.users);
  const expenses = useSelector(state => state.expenses.expenses);

  const createGroup = () => {

  }
  
  
  return (
    <>
        <Button variant="primary" onClick={()=>{createGroup()}}>Create Group</Button>
        <h1>Hello world</h1>
    </>
  )
}


export default App;