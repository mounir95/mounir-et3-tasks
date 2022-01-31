import React, { useState } from 'react';
import { Context } from 'vm';
import './App.css';
import Excellsheet from './blocks/ExcelSheet';
import FilteredExcellsheet from './blocks/FilteredExcellsheet'
import AddForm from './blocks/FormBlock';
import FilterByDate from './blocks/FilterSort/FilterByDate';
import ChooseFilter from './blocks/FilterSort/FilterByAll';

export let ObjectArray : Context = React.createContext<object[]>([{}]);
export let FilteredObjectArray : Context = React.createContext<object[]>([{}]);
export let IDarray : Context = React.createContext<number[]>([0]);
export let FiltereIDarray : Context = React.createContext<number[]>([0]);

function App() {
  const [ { clickvalue, formisHidden, FilterView } , changeState ] = useState({
    clickvalue : 'ADD',
    formisHidden : true,
    FilterView : true
  });

  const setAllChanges = () => {
    ObjectArray = React.createContext< object[]>([...ObjectArray._currentValue])
    FilteredObjectArray = React.createContext< object[]>([...FilteredObjectArray._currentValue])
    changeState(val => val = { ...val })
  }

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
    });
    IDarray._currentValue2 = IDarray._currentValue;

    ObjectArray._currentValue = ObjectArray._currentValue.filter((object : Context) => {
      if(object.Myid !== objectid){
        return object;
      }
    });
    ObjectArray._currentValue2 = ObjectArray._currentValue;
    IDarray = React.createContext<number[]>([...IDarray._currentValue ]);
    setAllChanges();
  }
  
  const getFilterValue =(event : React.ChangeEvent<HTMLSelectElement>, type : string) => {
    FilteredObjectArray = React.createContext<object[]>([{}]);
    FiltereIDarray = React.createContext<number[]>([0]);
    ObjectArray._currentValue.filter((object : Context) => {
      if( object.Mycomment !== undefined && type === 'Comment' && object.Mycomment.search(event.target.value) >= 0){
        FilteredObjectArray = React.createContext<object[]>([...FilteredObjectArray._currentValue, object]);
        FiltereIDarray = React.createContext<number[]>([...FiltereIDarray._currentValue, object.Myid ]);
      }
      if( type === 'Status' && object.Mystatus_list === event.target.value){
        FilteredObjectArray = React.createContext<object[]>([...FilteredObjectArray._currentValue, object]);
        FiltereIDarray = React.createContext<number[]>([...FiltereIDarray._currentValue, object.Myid ]);
      }
      if( type === 'Se_List' && object.Myse_list === event.target.value){
        FilteredObjectArray = React.createContext<object[]>([...FilteredObjectArray._currentValue, object]);
        FiltereIDarray = React.createContext<number[]>([...FiltereIDarray._currentValue, object.Myid ]);
      }
      if( type === 'Platform' && object.Myplatform === event.target.value){
        FilteredObjectArray = React.createContext<object[]>([...FilteredObjectArray._currentValue, object]);
        FiltereIDarray = React.createContext<number[]>([...FiltereIDarray._currentValue, object.Myid ]);
      }
    });
    changeState(val => val = { ...val, formisHidden : true, FilterView : false })
  }

  const DoneButton = () => {
    changeState(val => val = { ...val, FilterView : true })
  }

  return (
    <div className="App">
        <ChooseFilter FilterValue={(event : React.ChangeEvent<HTMLSelectElement>, type:string) => getFilterValue(event,type)} />
      { FilterView === true && <div className='excelsheetcss'>
        <FilterByDate SubmitingChanges={() => setAllChanges()} />
        <Excellsheet SubmitDelete={(objectid : number) : void => SubmitDeleteFun(objectid)}></Excellsheet>
        <button className='AddClose_button' onClick={() => AddButton(clickvalue)}>{ clickvalue }</button>
      </div> }
      <div className='excelsheetcss'>
        { !formisHidden && <AddForm handleChange={(id : number) : void => AddFormfun(id, clickvalue)} ></AddForm> }
      </div>
      { FilterView === false && <div className='excelsheetcss'>
        <FilteredExcellsheet ></FilteredExcellsheet>
        <button className='AddClose_button' onClick={() => DoneButton()}> Done </button>
      </div> }
    </div>
  );
}

export default App;
