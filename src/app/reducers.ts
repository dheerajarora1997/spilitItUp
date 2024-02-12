
import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './exampleSlice';
import usersReducer from './usersSlice';
import expensesReducer from './expensesSlice';

const rootReducer = combineReducers({
  example: exampleReducer,
  users: usersReducer,
  expenses: expensesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
