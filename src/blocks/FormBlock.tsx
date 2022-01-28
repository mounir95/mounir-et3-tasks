import '../App.css';
import React, { FC, useState } from 'react';
import { globalStateContext } from '../contants/UseContext'
import RadioButtons from './components/RadioButtons';
import SelectLists from './components/SelectLists';
import FirstColumn from './components/FirstColumn';
import TextInputs from './components/TextInputs';
import { IDarray, ObjectArray } from '../App';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  handleChange:Function,
}

const AddForm :FC<Props> = ( { handleChange } ) => {
  let lastIndex : number = IDarray._currentValue[(IDarray._currentValue).length-1];
  if(((IDarray._currentValue).length-1) < 0 ){
    lastIndex = 0;
  }

  const [ { id , date } , setChanges] = useState( 
    { 
      id : lastIndex, 
      date : globalStateContext._currentValue.Date,
    });

  const Changedate = (e : Date | null) : void => {
    setChanges(val => val = {...val,  date: e });   
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
    event.preventDefault();
    setChanges(val => val = { ...val , id : val.id + 1 } );
    ObjectArray.Myid = id + 1;
    ObjectArray.Mydate = date;
    handleChange(id + 1);
  }

  return <div>
    <div className="My_Form">
      <h1>Add New Record</h1>
      <form onSubmit={handleSubmit}>
        <div className='textalign_center'>
          <div className="row col-sm-4">  
            <DatePicker className="form-control" 
              selected={date} placeholderText="Select Date" showPopperArrow={false}  
              onChange={(newdate : Date | null) => Changedate(newdate)}  
            />  
          </div>
        </div>
        <div className='AddForm_field'>
          <FirstColumn />
          <TextInputs />
          <SelectLists />
          <RadioButtons />
        </div>
        <input className="submitbutton" value="Add" type="submit" />
      </form>
    </div>
    </div>
}
export default AddForm;