import '../App.css';
import React, { Context, FC, useState } from 'react';
import { globalStateContext } from '../contants/UseContext'
import MyList from './components/Lists'
import Myinput from './components/Textinputs'
import RadioButton from './components/Radiobuttons';
import { IDarray, ObjectArray } from '../App';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import context from 'react-bootstrap/esm/AccordionContext';

interface Props {
  handleChange:any,
}

const AddForm :FC<Props> = ( { handleChange } ) => {
  if(((IDarray._currentValue).length-1) < 0 ){
    var lastIndex : number= 0;
  }
  else{
    var lastIndex : number= IDarray._currentValue[(IDarray._currentValue).length-1];
  }

  const [ { id , date, se_list, comment, size, dificulity, platform, pr_Link, release_version, status_list, Main_status_list, reveiwed_by_BY, reveiwed_by_AH, reveiwed_by_HT } , setChanges] = useState( 
    { 
      id : lastIndex, 
      date : globalStateContext._currentValue.Date,
      se_list : (globalStateContext)._currentValue.SE_list,
      comment : (globalStateContext)._currentValue.Comment,
      size : (globalStateContext)._currentValue.Size,
      dificulity : (globalStateContext)._currentValue.Dificulity,
      platform : (globalStateContext)._currentValue.Platform,
      pr_Link: (globalStateContext)._currentValue.Pr_Link,
      release_version : (globalStateContext)._currentValue.Release_Version,
      status_list : (globalStateContext)._currentValue.Status_list,
      Main_status_list : (globalStateContext)._currentValue.Status_list,
      reveiwed_by_BY : (globalStateContext)._currentValue.Reveiwed_by_BY,
      reveiwed_by_AH : (globalStateContext)._currentValue.Reveiwed_by_AH,
      reveiwed_by_HT : (globalStateContext)._currentValue.Reveiwed_by_HT,
    });

  let Changedate = (e : any) => {
    setChanges(val => val = {...val,  date: e });   
  }

  let onInputchange = (event : any, Atribuite :any) => {
    if( Atribuite === comment ){
      setChanges(val => val = { ...val, comment : event.target.value });
    }
    else if ( Atribuite === release_version ){
      setChanges(val => val = { ...val, release_version : event.target.value });
    }
    else if ( Atribuite === pr_Link ){
      setChanges(val => val = { ...val, pr_Link : event.target.value });
    }

  };

  let outputEvent = (event : any, parentData : any) =>{
    if( parentData === se_list ){
      setChanges( val => val = { ...val, se_list : [ event.target.value ] });
    }
    else if( parentData === size){
      setChanges( val => val = { ...val, size : [ event.target.value ] });
    }
    else if(parentData === dificulity){
      setChanges(val => val = { ...val, dificulity : [ event.target.value ] });
    }
    else if(parentData === platform){
      setChanges(val => val = { ...val, platform : [ event.target.value ] });
    }
  }

  let changeList = (event : any) => {
    setChanges(val => val = {...val, status_list : [ event.target.value ] })
 }

 let changeHandle = ( event : any, attribute : any ) => {
    if(Object.keys(attribute).toString() === 'reveiwed_by_BY' ){
       setChanges( val => val = {...val, reveiwed_by_BY : event.target.value })
    }
    else if(Object.keys(attribute).toString() === 'reveiwed_by_AH' ){
       setChanges( val => val = {...val, reveiwed_by_AH : event.target.value })
    }
    else if(Object.keys(attribute).toString() === 'reveiwed_by_HT' ){
       setChanges( val => val = {...val, reveiwed_by_HT : event.target.value })
    }
 }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setChanges(val => val = { ...val , id : val.id + 1 } );
    ObjectArray.Myid = id + 1;
    ObjectArray.Mydate = date;
    ObjectArray.Myse_list = se_list[0];
    ObjectArray.Mycomment = comment;
    ObjectArray.Mysize = size[0];
    ObjectArray.Mydificulity = dificulity[0];
    ObjectArray.Myplatform = platform[0];
    ObjectArray.Myrelease_version = release_version;
    ObjectArray.Mypr_Link = pr_Link;
    ObjectArray.Mystatus_list = status_list[0];
    ObjectArray.Myreveiwed_by_BY = reveiwed_by_BY;
    ObjectArray.Myreveiwed_by_AH = reveiwed_by_AH;
    ObjectArray.Myreveiwed_by_HT = reveiwed_by_HT;
    handleChange(id + 1);
  }

  return <div>
    <div className="My_Form">
      <h1>Add New Record</h1>
      <form onSubmit={handleSubmit}>
        <div className='textalign_center'>
          <ul>
            <li className='select_date_css'>
              <div className="row">  
                  <div className="col-sm-4">  
                          <DatePicker className="form-control" 
                          // {/* style={{ marginTop: "10px", position: "absolute", inset: "auto auto 0px 0px", transform: "translate(590px, 200px)" }} */}
                                  selected={date} placeholderText="Select Date" showPopperArrow={false}  
                                  onChange={(newdate : any) => Changedate(newdate)}  
                          />  
                  </div>  
              </div>
            </li>
          </ul>
        </div>
        <div className='AddForm_field'>
          <ul>
            <li className='listinputs' >
                        <globalStateContext.Provider value ={ globalStateContext._currentValue.SE_list }>
                          <div className='listrows'>
                            <label className="text_field_class"> SE List : </label> 
                            <select className='option_List_style' defaultValue='AH' onChange={(event) => outputEvent(event,se_list)}>
                              <MyList />
                            </select>
                          </div>
                        </globalStateContext.Provider>
            </li>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ globalStateContext._currentValue.Platform }>
                          <div className='listrows'>
                            <label className="text_field_class"> Platform : </label> 
                            <select className='option_List_style' onChange={(event) => outputEvent(event,platform)}>
                              <MyList />
                            </select>
                          </div>
                      </globalStateContext.Provider>
            </li>
            
            <li className='listinputs' >
                      <globalStateContext.Provider value={ release_version }>
                          <div className='listrows'>
                            <label className="text_field_class"> Release Version : </label> 
                            <Myinput inputHandeler = {(inputval : any) => onInputchange( inputval, release_version)} />
                          </div>
                      </globalStateContext.Provider>
              </li>
          </ul>
          <ul>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ comment }>
                          <div className='listrows'> 
                            <label className="text_field_class"> Comment : </label> 
                            <Myinput inputHandeler = {(inputval : any) => onInputchange( inputval, comment )} />
                          </div>
                      </globalStateContext.Provider>

            </li>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ pr_Link }>
                          <div className='listrows'>
                            <label className="text_field_class"> Pr Link : </label> 
                            <Myinput inputHandeler = {(inputval : any) => onInputchange( inputval, pr_Link)} />
                          </div>
                      </globalStateContext.Provider>
            </li>
          </ul>
          <ul>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ globalStateContext._currentValue.Size }>
                          <div className='listrows'>
                            <label className="text_field_class"> Size : </label> 
                            <select className='option_List_style' onChange={(event) => outputEvent(event,size)}>
                              <MyList />
                            </select>
                          </div>
                      </globalStateContext.Provider>
            </li>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ globalStateContext._currentValue.Dificulity }>
                          <div className='listrows'>
                            <label className="text_field_class"> Dificulity : </label> 
                            <select className='option_List_style' onChange={(tagname) => outputEvent( tagname, dificulity)}>
                              <MyList />
                            </select>
                          </div>
                      </globalStateContext.Provider>
            </li>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ Main_status_list }>
                          <div className='listrows'>
                            <label className="text_field_class"> Status List : </label> 
                      <select className='option_List_style' onChange={(event) => changeList(event)}>
                          <MyList />
                          </select>
                          </div>
                      </globalStateContext.Provider>
            </li>
          </ul>
          <ul>
            <li className='text_value_radiobutton'>
                    <globalStateContext.Provider value = { reveiwed_by_BY }>
                    <strong>Reveiwed By BH :</strong>
                      <RadioButton choosebutton = {(event) => changeHandle( event , { reveiwed_by_BY } )}/>
                    </globalStateContext.Provider>
            </li>
            <li className='text_value_radiobutton'>
                    <globalStateContext.Provider value = { reveiwed_by_AH }>
                    <strong>Reveiwed By AH :</strong>
                      <RadioButton choosebutton = {(event) => changeHandle( event, { reveiwed_by_AH } )}/>
                    </globalStateContext.Provider>
            </li>
            <li className='text_value_radiobutton'>
                    <globalStateContext.Provider value = { reveiwed_by_HT }>
                    <strong>Reveiwed By HT :</strong>
                      <RadioButton choosebutton = {(event) => changeHandle( event, { reveiwed_by_HT } )}/>
                    </globalStateContext.Provider>
            </li>
          </ul>
        </div>
        <input className="submitbutton" value="Add" type="submit" />
        </form>
    </div>
    </div>
}

export default AddForm;