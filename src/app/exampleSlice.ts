import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IParticipants {
  name : string;
  id : string;
  email ?: string; 
  phone ?: string; 
}

interface IExpanses {
  paidBy : string,
  description : string;
  expancesParticipants : IParticipants[]
}

interface mySplitApp {
  participants : IParticipants[];
  expanses : IExpanses[];
  name : string;
  groupType : 'Trip' | 'Home' | 'Other';
  groupAvatar ?: string; 
  creationDate : string;
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
    reset(){
      state.mySplitApp = undefined;
    },
    updateAppData(state, action){
      state.mySplitApp = action.payload;
    }
  },
});
export default exampleSlice.reducer;
export const { actions, reducer: exampleReducer } = exampleSlice;
