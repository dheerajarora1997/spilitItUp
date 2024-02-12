import { useDispatch } from 'react-redux';
import { addUser } from './usersSlice';

const UserComponent = () => {
  const dispatch = useDispatch();


  const handleAddUser = () => {
    dispatch(addUser({ name: 'Alice' }));
  };

  return (
    <>
    <button onClick={handleAddUser}>Add User</button>

    
    </>
  );
};
