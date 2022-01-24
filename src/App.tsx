import React, { useState } from 'react';
import './App.css';
import Excellsheet from './blocks/excelsheet'
import AddForm from './blocks/FormBlock'

export let IDarray : any = React.createContext< Array<number>>([0]);
var lastIndex : number= IDarray._currentValue[(IDarray._currentValue).length-1];

function App() {
  const [ { excelisHidden, formisHidden, id } , changeState ] = useState({
    excelisHidden : true,
    formisHidden : false,
    id : lastIndex
  })

  let ToggleForm = (object, lastid) => {
    console.log(object)
    console.log(lastid)
    changeState(val => val = { ...val,excelisHidden : !excelisHidden, formisHidden : true, id : lastid + 1 })
    IDarray = React.createContext< Array<number>>([...IDarray._currentValue, lastid + 1 ])
    console.log(IDarray)
  }

  let DoneForm = () => {
    changeState(val => val = { ...val,excelisHidden : true, formisHidden : false })
  }

  return (
    <div className="App">
      <div className='excelsheetcss'>
      { !formisHidden && <AddForm arraylastindex={lastIndex} handleChange={(object, lastid) => ToggleForm(object, lastid)} ></AddForm> }
      </div>
      <div className='excelsheetcss'>
      { !excelisHidden && <Excellsheet addhandleChange={() => DoneForm()}></Excellsheet>}
      </div>
    </div>
  );
}

export default App;