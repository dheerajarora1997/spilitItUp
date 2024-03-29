import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense(state, action) {
      console.log(state, action.payload)
      // state.expenses.push(action.payload);
    },
  },
});

export const { addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;