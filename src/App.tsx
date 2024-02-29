import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import './App.scss';
import { mySplitApp, updateAppData } from './app/exampleSlice';
import UserList from './userList';


const App = () => {

  const dispatch = useDispatch();
  const example = useSelector(state => state.example);
  // const users = useSelector(state => state.users.users);
  // const expenses = useSelector(state => state.expenses.expenses);

  const createGroup = () => {
    let obj:mySplitApp = {
      "name": "group 1",
      groupType: 'Trip',
      creationDate : Date.now(),
      participantsList : [{name: 'dheeraj', id: 'dheeraj.arora', email: 'mal@mail.com', phone: 9898989898}]
    }
    dispatch(updateAppData(obj))
  }
  
  let usersData = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', userId: '12345' },
    { name: ' Doe', email: 'john@example.com', phone: '123-456-7890', userId: '12345' },
    { name: 'sdfds', email: 'john@example.com', phone: '123-456-7890', userId: '12345' },
    { name: 'dfsdoe', email: 'john@example.com', phone: '123-456-7890', userId: '12345' },
    { name: 'fsdfsdfsdfoe', email: 'john@example.com', phone: '123-456-7890', userId: '12345' },
    { name: 'sdfsdfsdfe', email: 'john@example.com', phone: '123-456-7890', userId: '12345' },
    { name: 'zdfsdsdf', email: 'john@example.com', phone: '123-456-7890', userId: '12345' },
    { name: 'dsfsdfsdfs', email: 'john@example.com', phone: '123-456-7890', userId: '12345' },
  ];
  
  
  return (
    <>
    <div style={{display: 'flex',}}></div>
         <UserList  users={usersData} />
        <Button variant="primary" onClick={()=>{createGroup()}}>Create Group</Button>
        {JSON.stringify(example && example)}


    </>
  )
}


export default App;