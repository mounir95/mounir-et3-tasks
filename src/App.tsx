import React, { useState } from 'react';
import './App.css';
import Excellsheet from './blocks/ExcelSheet'
import AddForm from './blocks/FormBlock'
import UpdateForm from './blocks/UpdateBlock'

export let ObjectArray : any = React.createContext([{}]);
export let updatedObjectarray : any = React.createContext([{}]);

export let IDarray : any = React.createContext< Array<number>>([0]);

function App() {
  const [ { clickvalue, updateFormisHidden, formisHidden, editd_object_id } , changeState ] = useState({
    clickvalue : 'ADD',
    updateFormisHidden : true,
    formisHidden : true,
    editd_object_id : {}
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

  let SubmitDeleteFun = (objectid : any) => {
    IDarray._currentValue = IDarray._currentValue.filter(e => {
      if(e !== objectid){
        return e;
      }
      else{ return '' }
    });
    IDarray._currentValue2 = IDarray._currentValue2.filter(e => {
      if(e !== objectid){
        return e;
      }
      else{ return '' }
    });

    ObjectArray._currentValue = ObjectArray._currentValue.filter(object => {
      if(object.Myid !== objectid){
        return object;
      }
      else{ return '' }
        });

    ObjectArray._currentValue2 = ObjectArray._currentValue2.filter(object => {
        if(object.Myid !== objectid){
            return object;
        }
        else{ return '' }
            });
    IDarray = React.createContext< Array<number>>([...IDarray._currentValue ]);
    ObjectArray = React.createContext< Array<number>>([...ObjectArray._currentValue])
    changeState(val => val = { ...val })
          }

  let UpdateFormfun =(id) => {
    changeState(val => val = { ...val, updateFormisHidden : true })
    if(id === updatedObjectarray.Myid){
      ObjectArray._currentValue[id] = updatedObjectarray;
      ObjectArray._currentValue2[id] = updatedObjectarray;
    }
    ObjectArray = React.createContext< Array<number>>([...ObjectArray._currentValue])
  };
  
  return (
    <div className="App">
      <div className='excelsheetcss'>
        <Excellsheet SubmitEditrow={(objectid) => UpdateFormfun(objectid)} SubmitDelete={(objectid) => SubmitDeleteFun(objectid)}></Excellsheet>
        <button className='AddClose_button' onClick={() => AddButton(clickvalue)}>{ clickvalue }</button>
      </div>
      <div className='excelsheetcss'>
        { !formisHidden && <AddForm handleChange={(id : number) => AddFormfun(id, clickvalue)} ></AddForm> }
      </div>
    </div>
  );
}

export default App;
