import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IParticipants {
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
  mySplitApp ?: mySplitApp[];
  selectedGroup ?: number;
}

const initialState: ExampleState = {
  mySplitApp : [],
  selectedGroup: undefined,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    reset(state:ExampleState){
      state.mySplitApp = undefined;
    },
    updateAppData(state:ExampleState, action) {
      if(!action.payload.expenseList){
        let haveGroup = state.mySplitApp;
        haveGroup?.push(action.payload)
        state.mySplitApp = haveGroup;
      }
    }, 
    selectedGroup(state:ExampleState, action){
      state.selectedGroup = action.payload;
    }

  },
});
export default exampleSlice.reducer;
export const { reset, updateAppData, selectedGroup} = exampleSlice.actions; 
