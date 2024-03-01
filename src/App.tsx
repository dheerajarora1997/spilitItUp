import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { IParticipants, mySplitApp, selectedGroup, updateAppData } from "./app/exampleSlice";
import { useState } from "react";

const App = () => {
  const initialState : mySplitApp = {
    name: "",
    groupType: "Trip",
    creationDate: Date.now(),
    participantsList: [
      {
        name: "",
        id: "", 
      },
    ],
  };

  const [payload, setPayload] = useState<mySplitApp>(initialState);
  const dispatch = useDispatch();
  const mySplitApp = useSelector((state) => state.example.mySplitApp);

  const createGroup = () => {
    dispatch(updateAppData(payload));
    setPayload(initialState)
  };

  const changeInput = (value: string, key: string) => {
    setPayload({ ...payload, [key]: value });
  };

  const addUser = () => {
    let list = payload.participantsList;
    let userObj = {name : '', id: '' }
    list.push(userObj)
    setPayload({ ...payload, participantsList: list });
  }

  const changeUser = (name : string, index : number) => {
    let list = payload.participantsList;
    list[index].name = name;
    list[index].id = name;
    setPayload({ ...payload, participantsList: list });
  }

  const removeUser = (index:number) => {
    let list = payload.participantsList;
    list.splice(index, 1)
    setPayload({ ...payload, participantsList: list });
  }

  const groupSelected = (groupID: number) => {
    dispatch(selectedGroup(groupID))
  }

  return (
    <>
      <div className="parent-wrapper">
        <div className="wrapper">
          <h2>Group information</h2>
          <input type="text" name="" id="" value={payload.name} onChange={(e)=>{changeInput(e.target.value, 'name')}} />

          <h3>Participants</h3>
          {payload.participantsList.map((item:IParticipants, index: number)=>{
            return(
              <div className="d-flex mb-3" key={index}>
                <input
                  type="text"
                  name=""
                  id={item.id}
                  placeholder="Enter Name"
                  value={item.name}
                  onChange={(e)=>{changeUser(e.target.value, index)}}
                />
                <button className="remove" onClick={()=>{removeUser(index)}}>remove</button>
              </div>
            )  
          })}
          <div className="d-flex">
            <button className="addnew" onClick={addUser}>Add Participant</button>
          </div>
          <hr />
          <button onClick={createGroup}>Create Group</button>
          <h3>Listing of Groups</h3>

          {mySplitApp.map((splitGroup: mySplitApp)=>{
            return (
              <div>{splitGroup.name } | {splitGroup.participantsList.length}</div>
            )
          })}

        </div>

        <div className="wrapper">
        {mySplitApp.map((splitGroup: mySplitApp, index: number)=>{
            return (
              <button key={index} onClick={()=>{groupSelected(index)}}>{splitGroup.name }</button>
            )
          })}
          <h2>Add Expense</h2>
          <h3>Title</h3>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Amount"
            value="amount"
          />
          <h4>participants list to be add</h4>
          <div className="d-flex">
            <input type="checkbox" name="" id="" />
            name
          </div>

          <button>Add Expense</button>

          <h3>List of Expense</h3>
        </div>
        <div className="wrapper">
          <h2>Current statement</h2>
        </div>
      </div>
    </>
  );
};

export default App;
