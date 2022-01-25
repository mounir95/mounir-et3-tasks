import React, { useState } from 'react';
import './App.css';
import Excellsheet from './blocks/ExcelSheet'
import AddForm from './blocks/FormBlock'

export let ObjectArray : any = React.createContext([{}]);

export let IDarray : any = React.createContext< Array<number>>([0]);

function App() {
  const [ { clickvalue, excelisHidden, formisHidden } , changeState ] = useState({
    clickvalue : 'ADD',
    excelisHidden : true,
    formisHidden : true
  });

  let ToggleForm = (id : number, buttonvalue : string) => {
    if (buttonvalue === 'ADD'){
      changeState(val => val = { ...val,excelisHidden : !excelisHidden, formisHidden : true, clickvalue : 'CLOSE' })
    }
    else{
      changeState(val => val = { ...val,excelisHidden : !excelisHidden, formisHidden : true, clickvalue : 'ADD' })
    }
    var lastIndex : number= IDarray._currentValue[IDarray._currentValue.length-1];
    if(id !== lastIndex){
      IDarray = React.createContext< Array<number>>([...IDarray._currentValue, id ]);
      ObjectArray = React.createContext< Array<number>>([...ObjectArray._currentValue, ObjectArray])
    }
  };
  
  let AddButton = (buttonvalue : string) => {
    if (buttonvalue === 'ADD'){
      changeState(val => val = { ...val,excelisHidden : true, formisHidden : !formisHidden, clickvalue : 'CLOSE' })
    }
    else{
      changeState(val => val = { ...val,excelisHidden : true, formisHidden : !formisHidden, clickvalue : 'ADD' })
    }
  };

  return (
    <div className="App">
      <div className='excelsheetcss'>
        <Excellsheet ></Excellsheet>
        <button className='AddClose_button' onClick={() => AddButton(clickvalue)}>{ clickvalue }</button>
      </div>
      <div className='excelsheetcss'>
        { !formisHidden && <AddForm handleChange={(id : number) => ToggleForm(id, clickvalue)} ></AddForm> }
      </div>
    </div>
  );
}

export default App;
