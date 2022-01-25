import '../App.css';
import React, { FC, useState } from 'react';
import { globalStateContext } from '../contants/UseContext'
import MyList from './components/Lists'
import Myinput from './components/Textinputs'
import RadioButton from './components/Radiobuttons';
import { ObjectArray, updatedObjectarray } from '../App';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  handleUpdateChange:any,
  updatedvalue : any,
}

let UpdateForm :FC<Props> = ( { handleUpdateChange, updatedvalue } ) => {
  const [ { id , date, se_list, comment, size, dificulity, platform, pr_Link, release_version, status_list, Main_status_list, reveiwed_by_BY, reveiwed_by_AH, reveiwed_by_HT } , setChanges] = useState( 
    { 
      id : updatedvalue.Myid, 
      date : React.useContext(globalStateContext).Date,
      se_list : React.useContext(globalStateContext).SE_list,
      comment : React.useContext(globalStateContext).Comment,
      size : React.useContext(globalStateContext).Size,
      dificulity : React.useContext(globalStateContext).Dificulity,
      platform : React.useContext(globalStateContext).Platform,
      pr_Link: React.useContext(globalStateContext).Pr_Link,
      release_version : React.useContext(globalStateContext).Release_Version,
      status_list : React.useContext(globalStateContext).Status_list,
      Main_status_list : React.useContext(globalStateContext).Status_list,
      reveiwed_by_BY : React.useContext(globalStateContext).Reveiwed_by_BY,
      reveiwed_by_AH : React.useContext(globalStateContext).Reveiwed_by_AH,
      reveiwed_by_HT : React.useContext(globalStateContext).Reveiwed_by_HT,
    });

  let Changedate = (e) => {
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

  const handleSubmitUpdate = (event: any) => {
    console.log("//////////// second  ///////////// ")
    console.log(ObjectArray)
    event.preventDefault();
    updatedObjectarray.Myid = id;
    updatedObjectarray.Mydate = date;
    updatedObjectarray.Myse_list = se_list[0];
    updatedObjectarray.Mycomment = comment;
    updatedObjectarray.Mysize = size[0];
    updatedObjectarray.Mydificulity = dificulity[0];
    updatedObjectarray.Myplatform = platform[0];
    updatedObjectarray.Myrelease_version = release_version;
    updatedObjectarray.Mypr_Link = pr_Link;
    updatedObjectarray.Mystatus_list = status_list[0];
    updatedObjectarray.Myreveiwed_by_BY = reveiwed_by_BY;
    updatedObjectarray.Myreveiwed_by_AH = reveiwed_by_AH;
    updatedObjectarray.Myreveiwed_by_HT = reveiwed_by_HT;
    handleUpdateChange(id);
  }

  return <div>
    <div className="My_Form">
      <h1>Update Record</h1>
      <form onSubmit={handleSubmitUpdate}>
        <div className='AddForm_field'>
          <ul>
            <li className='listinputs' >
                        <globalStateContext.Provider value={ React.useContext(globalStateContext).SE_list }>
                          <div className='listrows'>
                            <label className="text_field_class"> SE List : </label> 
                            <select className='option_List_style' onChange={(event) => outputEvent(event,se_list)}>
                              <MyList />
                            </select>
                          </div>
                        </globalStateContext.Provider>
            </li>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ React.useContext(globalStateContext).Platform }>
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
                      <globalStateContext.Provider value={ React.useContext(globalStateContext).Size }>
                          <div className='listrows'>
                            <label className="text_field_class"> Size : </label> 
                            <select className='option_List_style' onChange={(event) => outputEvent(event,size)}>
                              <MyList />
                            </select>
                          </div>
                      </globalStateContext.Provider>
            </li>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ React.useContext(globalStateContext).Dificulity }>
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
        <ul>
            {/* <li>Id : { id }</li> */}
            {/* <li>Id : { IDarray._currentValue }</li> */}
            <li>
              <div className="row" style={{ marginTop: "10px", position: "absolute", inset: "auto auto 0px 0px", transform: "translate(590px, -200px)" }}>  
                  <div className="col-sm-4">  
                          <DatePicker className="form-control"  style={{ marginTop: "10px", position: "absolute", inset: "auto auto 0px 0px", transform: "translate(590px, 200px)" }}
                                  selected={date} placeholderText="Select Date" showPopperArrow={false}  
                                  onChange={(newdate) => Changedate(newdate)}  
                          />  
                  </div>  
              </div>
            </li>
          </ul>
        <input className="submitbutton" value="Add" type="submit" />
        </form>
    </div>
    </div>
}

export default UpdateForm;