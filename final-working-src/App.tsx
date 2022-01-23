import React, { useState } from 'react';
import './App.css';
import Excellsheet from './blocks/excelsheet'
import AddForm from './blocks/FormBlock'


function App() {
  const [ { isHidden } , changeState ] = useState({
    isHidden : true,
  })
  let ToggleForm = () => {
    changeState(val => val = { isHidden : !isHidden })
  }

  let DoneForm = () => {
    changeState(val => val = { isHidden : true })
  }

  return (
    <div className="App">
      <div className='excelsheetcss'>
       <AddForm handleChange={() => ToggleForm()} ></AddForm>
      </div>
      <div className='excelsheetcss'>
      { !isHidden && <Excellsheet addhandleChange={() => DoneForm()}></Excellsheet>}
      </div>
    </div>
  );
}

export default App;
