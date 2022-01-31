import React, { useState } from 'react';
import { Context } from 'vm';
import './App.css';
import ChooseFilter from './blocks/FilterSort/FilterByAll';
import MainEexcel from './appExcelss/MainExcel';
import FilteredExcel from './appExcelss/FilteredExcel';
import AddButtonfun from './appExcelss/AddButton';

export let ObjectArray : Context = React.createContext<object[]>([{}]);
export let FilteredObjectArray : Context = React.createContext<object[]>([{}]);

function App() {
  const [ { clickvalue, formisHidden, FilterView } , changeState ] = useState({
    clickvalue : 'ADD',
    formisHidden : true,
    FilterView : true
  });

  const setAllChanges = () => {
    ObjectArray = React.createContext< object[]>([...ObjectArray._currentValue])
    FilteredObjectArray = React.createContext< object[]>([...FilteredObjectArray._currentValue])
    changeState(val => val = { clickvalue:clickvalue, formisHidden:formisHidden, FilterView:FilterView})
  }

  const AddFormfun = (id : number, buttonvalue : string) => {
    if (buttonvalue === 'ADD'){
      changeState(val => val = { FilterView:FilterView , formisHidden : true, clickvalue : 'CLOSE' })
    }
    else{
      changeState(val => val = { FilterView:FilterView , formisHidden : true, clickvalue : 'ADD' })
    }
      ObjectArray = React.createContext< Array<number>>([...ObjectArray._currentValue, ObjectArray])
  };
  
  const AddButton = (buttonvalue : string) => {
    if (buttonvalue === 'ADD'){
      changeState(val => val = { FilterView:FilterView , formisHidden : !formisHidden, clickvalue : 'CLOSE' })
    }
    else{
      changeState(val => val = { FilterView:FilterView , formisHidden : !formisHidden, clickvalue : 'ADD' })
    }
  };

  const SubmitDeleteFun = (objectid : number)  : void => {
    ObjectArray._currentValue = ObjectArray._currentValue.filter((object : Context) => {
      if(object.Myid !== objectid){
        return object;
      }
    });
    ObjectArray._currentValue2 = ObjectArray._currentValue;
    setAllChanges();
  }
  
  const getFilterValue =(event : React.ChangeEvent<HTMLSelectElement>, type : string) => {
    FilteredObjectArray = React.createContext<object[]>([{}]);
    ObjectArray._currentValue.filter((object : Context) => {
      if( object.Mycomment !== undefined && type === 'Comment' && object.Mycomment.search(event.target.value) >= 0){
        FilteredObjectArray = React.createContext<object[]>([...FilteredObjectArray._currentValue, object]);
      }
      if( type === 'Status' && object.Mystatus_list === event.target.value){
        FilteredObjectArray = React.createContext<object[]>([...FilteredObjectArray._currentValue, object]);
      }
      if( type === 'Se_List' && object.Myse_list === event.target.value){
        FilteredObjectArray = React.createContext<object[]>([...FilteredObjectArray._currentValue, object]);
      }
      if( type === 'Platform' && object.Myplatform === event.target.value){
        FilteredObjectArray = React.createContext<object[]>([...FilteredObjectArray._currentValue, object]);
      }
    });
    changeState(val => val = { clickvalue:clickvalue , formisHidden : true, FilterView : false })
  }

  const DoneButton = () => {
    changeState(val => val = { clickvalue:clickvalue, formisHidden:formisHidden, FilterView : true })
  }

  return (
    <div className="App">
        <ChooseFilter filterValue={(event : React.ChangeEvent<HTMLSelectElement>, type:string) => getFilterValue(event,type)} />
        <MainEexcel filter={FilterView}clickval = {clickvalue} 
        Ondelet = {(objectid : number) => SubmitDeleteFun(objectid)} 
        onAdd={()=> AddButton(clickvalue)} setchanges = {()=>setAllChanges()}/>
        <AddButtonfun formisHidden={formisHidden} AddFomrmfun = {(id : number) => AddFormfun(id, clickvalue)}/>
      < FilteredExcel FilterView = {FilterView} onDone={() => DoneButton()} />
    </div>
  );
}

export default App;
