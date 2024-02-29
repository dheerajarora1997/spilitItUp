import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IParticipants {
  name : string;
  id : string;
  email ?: string; 
  phone ?: number; 
}

interface IExpense {
  paidBy : string, // user ID who paid the Bill
  description : string; // Pay for which Item
  amount : number; // Amount bill paid 
  expanceDate : string | Date | number;
  expancesParticipants : IParticipants[];
}

export interface mySplitApp {
  name : string;
  groupType : 'Trip' | 'Home' | 'Other';
  participantsList : IParticipants[]; 
  expenseList  ?: IExpense[]; // 
  totalExpense  ?: number; // 
  groupAvatar ?: string; 
  creationDate : string | Date | number;
}

interface ExampleState {
  mySplitApp ?: mySplitApp[]
}

const initialState: ExampleState = {

};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    reset(state:ExampleState){
      state.mySplitApp = undefined;
    },
    updateAppData(state, action){
      state.mySplitApp = action.payload;
    }
  },
});
export default exampleSlice.reducer;
export const { reset, updateAppData} = exampleSlice.actions; 
