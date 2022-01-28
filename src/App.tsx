import React, { useState } from 'react';
import { Context } from 'vm';
import './App.css';
import Excellsheet from './blocks/ExcelSheet'
import AddForm from './blocks/FormBlock'

export let ObjectArray : Context = React.createContext<object[]>([{}]);

export let IDarray : Context = React.createContext<number[]>([0]);

function App() {
  const [ { clickvalue, formisHidden } , changeState ] = useState({
    clickvalue : 'ADD',
    formisHidden : true,
  });

  const AddFormfun = (id : number, buttonvalue : string) => {
    if (buttonvalue === 'ADD'){
      changeState(val => val = { ...val, formisHidden : true, clickvalue : 'CLOSE' })
    }
    else{
      changeState(val => val = { ...val, formisHidden : true, clickvalue : 'ADD' })
    }
    var lastIndex : number= IDarray._currentValue[IDarray._currentValue.length-1];
    if(id !== lastIndex){
      IDarray = React.createContext<number[]>([...IDarray._currentValue, id ]);
      ObjectArray = React.createContext< Array<number>>([...ObjectArray._currentValue, ObjectArray])
    }
  };
  
  const AddButton = (buttonvalue : string) => {
    if (buttonvalue === 'ADD'){
      changeState(val => val = { ...val, formisHidden : !formisHidden, clickvalue : 'CLOSE' })
    }
    else{
      changeState(val => val = { ...val, formisHidden : !formisHidden, clickvalue : 'ADD' })
    }
  };

  const SubmitDeleteFun = (objectid : number)  : void => {
    IDarray._currentValue = IDarray._currentValue.filter((e : number) => {
      if(e !== objectid){
        return e;
      }
      else{ return '' }
    });
    IDarray._currentValue2 = IDarray._currentValue2.filter((e : number) => {
      if(e !== objectid){
        return e;
      }
      else{ return '' }
    });

    ObjectArray._currentValue = ObjectArray._currentValue.filter((object : Context) => {
      if(object.Myid !== objectid){
        return object;
      }
      else{ return '' }
        });

    ObjectArray._currentValue2 = ObjectArray._currentValue2.filter((object : Context) => {
        if(object.Myid !== objectid){
            return object;
        }
        else{ return '' }
            });
    IDarray = React.createContext<number[]>([...IDarray._currentValue ]);
    ObjectArray = React.createContext< object[]>([...ObjectArray._currentValue])
    changeState(val => val = { ...val })
          }
  
  return (
    <div className="App">
      <div className='excelsheetcss'>
        <Excellsheet SubmitDelete={(objectid : number) : void => SubmitDeleteFun(objectid)}></Excellsheet>
        <button className='AddClose_button' onClick={() => AddButton(clickvalue)}>{ clickvalue }</button>
      </div>
      <div className='excelsheetcss'>
        { !formisHidden && <AddForm handleChange={(id : number) : void => AddFormfun(id, clickvalue)} ></AddForm> }
      </div>
    </div>
  );
}

export default App;
