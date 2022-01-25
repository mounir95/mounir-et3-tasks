import React, { useState } from 'react';
import './App.css';
import Excellsheet from './blocks/ExcelSheet'
import AddForm from './blocks/FormBlock'
import UpdateForm from './blocks/UpdateBlock'

export let ObjectArray : any = React.createContext([{}]);
export let updatedObjectarray : any = React.createContext([{}]);

export let IDarray : any = React.createContext< Array<number>>([0]);

function App() {
  const [ { clickvalue, updateFormisHidden, formisHidden, editdobject } , changeState ] = useState({
    clickvalue : 'ADD',
    updateFormisHidden : true,
    formisHidden : true,
    editdobject : {}
  });

  let AddFormfun = (id : number, buttonvalue : string) => {
    if (buttonvalue === 'ADD'){
      changeState(val => val = { ...val, formisHidden : true, clickvalue : 'CLOSE' })
    }
    else{
      changeState(val => val = { ...val, formisHidden : true, clickvalue : 'ADD' })
    }
    var lastIndex : number= IDarray._currentValue[IDarray._currentValue.length-1];
    if(id !== lastIndex){
      IDarray = React.createContext< Array<number>>([...IDarray._currentValue, id ]);
      ObjectArray = React.createContext< Array<number>>([...ObjectArray._currentValue, ObjectArray])
    }
  };
  
  let AddButton = (buttonvalue : string) => {
    if (buttonvalue === 'ADD'){
      changeState(val => val = { ...val, formisHidden : !formisHidden, clickvalue : 'CLOSE' })
    }
    else{
      changeState(val => val = { ...val, formisHidden : !formisHidden, clickvalue : 'ADD' })
    }
  };

  let SubmitDeleteFun = (object : any) => {
    IDarray._currentValue = IDarray._currentValue.filter(e => {
      if(e !== object.Myid){
        return e;
      }
      else{ return '' }
    });
    IDarray._currentValue2 = IDarray._currentValue2.filter(e => {
      if(e !== object.Myid){
        return e;
      }
      else{ return '' }
    });

    ObjectArray._currentValue = ObjectArray._currentValue.filter(objectid => {
      if(objectid.Myid !== object.Myid){
        return object;
      }
      else{ return '' }
        });

    ObjectArray._currentValue2 = ObjectArray._currentValue2.filter(objectid => {
        if(objectid.Myid !== object.Myid){
            return object;
        }
        else{ return '' }
            });
    IDarray = React.createContext< Array<number>>([...IDarray._currentValue ]);
    ObjectArray = React.createContext< Array<number>>([...ObjectArray._currentValue])
    changeState(val => val = { ...val })
          }
    
  let SubmitEditFun = (object) => {
    console.log("//////////// First  ///////////// ")
    console.log(object)
    console.log(ObjectArray)
    changeState(val => val = { ...val,updateFormisHidden : false,formisHidden : true, editdobject : object  });
  }

  let UpdateFormfun =(id) => {
    changeState(val => val = { ...val, updateFormisHidden : true })
    if(id === updatedObjectarray.Myid){
      ObjectArray._currentValue[id] = updatedObjectarray;
      ObjectArray._currentValue2[id] = updatedObjectarray;
      console.log("//////////// third  ///////////// ")
      console.log(ObjectArray)
    }
    ObjectArray = React.createContext< Array<number>>([...ObjectArray._currentValue])
  };
  
  return (
    <div className="App">
      <div className='excelsheetcss'>
        <Excellsheet SubmitEditrow={(object) => SubmitEditFun(object)} SubmitDelete={(object) => SubmitDeleteFun(object)}></Excellsheet>
        <button className='AddClose_button' onClick={() => AddButton(clickvalue)}>{ clickvalue }</button>
      </div>
      <div className='excelsheetcss'>
        { !formisHidden && <AddForm handleChange={(id : number) => AddFormfun(id, clickvalue)} ></AddForm> }
      </div>
      <div className='excelsheetcss'>
        { !updateFormisHidden && <UpdateForm updatedvalue={ editdobject } handleUpdateChange={(id) => UpdateFormfun(id)} ></UpdateForm> }
      </div>
    </div>
  );
}

export default App;
