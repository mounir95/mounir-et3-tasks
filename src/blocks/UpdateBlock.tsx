import '../App.css';
import React, { FC, useState } from 'react';
import { globalStateContext } from '../contants/UseContext'
import MyList from './components/Lists'
import Myinput from './components/Textinputs'
import RadioButton from './components/Radiobuttons';
import { ObjectArray } from '../App';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Context } from 'vm';

interface Props {
  updated_id_value : number ,
}

const UpdateForm :FC<Props> = ( { updated_id_value } ) => {
  const [ { id , date, se_list, comment, size, dificulity, platform, pr_Link, release_version, status_list, Main_status_list, reveiwed_by_BY, reveiwed_by_AH, reveiwed_by_HT } , setChanges] = useState( 
    { 
      id : updated_id_value, 
      date : globalStateContext._currentValue.Date,
      se_list : globalStateContext._currentValue.SE_list,
      comment : globalStateContext._currentValue.Comment,
      size : globalStateContext._currentValue.Size,
      dificulity : globalStateContext._currentValue.Dificulity,
      platform : globalStateContext._currentValue.Platform,
      pr_Link: globalStateContext._currentValue.Pr_Link,
      release_version : globalStateContext._currentValue.Release_Version,
      status_list : globalStateContext._currentValue.Status_list,
      Main_status_list : globalStateContext._currentValue.Status_list,
      reveiwed_by_BY : globalStateContext._currentValue.Reveiwed_by_BY,
      reveiwed_by_AH : globalStateContext._currentValue.Reveiwed_by_AH,
      reveiwed_by_HT : globalStateContext._currentValue.Reveiwed_by_HT,
    });
    console.log('here')

  const Changedate = (e : Date | null) :void => {
    setChanges(val => val = {...val,  date: e });   
  }

  const onInputchange = (event : React.ChangeEvent<HTMLSelectElement>, Atribuite :string) :void => {
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

  const outputEvent = (event : React.ChangeEvent<HTMLSelectElement>, parentData : string) :void =>{
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

  const changeList = (event : React.ChangeEvent<HTMLSelectElement>) :void => {
    setChanges(val => val = {...val, status_list : [ event.target.value ] })
 }

 const changeHandle = ( event :  React.ChangeEvent<HTMLInputElement>, attribute : object ) : void => {
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

  const handleSubmitUpdate = (event: React.FormEvent<HTMLFormElement>) : void => {
    ObjectArray._currentValue.map((e: Context) => {
        if(e.Myid === updated_id_value){
            e.Myid = id;
            e.Mydate = date;
            e.Myse_list = se_list[0];
            e.Mycomment = comment;
            e.Mysize = size[0];
            e.Mydificulity = dificulity[0];
            e.Myplatform = platform[0];
            e.Myrelease_version = release_version;
            e.Mypr_Link = pr_Link;
            e.Mystatus_list = status_list[0];
            e.Myreveiwed_by_BY = reveiwed_by_BY;
            e.Myreveiwed_by_AH = reveiwed_by_AH;
            e.Myreveiwed_by_HT = reveiwed_by_HT;
          }    
      })
    event.preventDefault();
  }

  return <div>
    <div className="My_Form">
      <h1>Update Record</h1>
      <form onSubmit={handleSubmitUpdate}>
      <div className='textalign_center'>
          <ul>
            <li className='remove_li_dot'>ID : { id }</li>
            <li className='remove_li_dot'>
              <div className="row">  
                  <div className="col-sm-4">  
                          <DatePicker className="form-control"  
                          // style={{ marginTop: "10px", position: "absolute", inset: "auto auto 0px 0px", transform: "translate(590px, 200px)" }}
                                  selected={date} placeholderText="Select Date" showPopperArrow={false}  
                                  onChange={(newdate : Date | null ) => Changedate(newdate)}  
                          />  
                  </div>  
              </div>
            </li>
          </ul>
        </div>
        <div className='AddForm_field'>
          <ul>
            <li className='listinputs' >
                        <globalStateContext.Provider value={ globalStateContext._currentValue.SE_list }>
                          <div className='listrows'>
                            <label className="text_field_class"> SE List : </label> 
                            <select className='option_List_style' onChange={(event: React.ChangeEvent<HTMLSelectElement>) => outputEvent(event,se_list)}>
                              <MyList />
                            </select>
                          </div>
                        </globalStateContext.Provider>
            </li>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ globalStateContext._currentValue.Platform }>
                          <div className='listrows'>
                            <label className="text_field_class"> Platform : </label> 
                            <select className='option_List_style' onChange={(event: React.ChangeEvent<HTMLSelectElement>) => outputEvent(event,platform)}>
                              <MyList />
                            </select>
                          </div>
                      </globalStateContext.Provider>
            </li>
            
            <li className='listinputs' >
                      <globalStateContext.Provider value={ release_version }>
                          <div className='listrows'>
                            <label className="text_field_class"> Release Version : </label> 
                            <Myinput inputHandeler = {(inputval: React.ChangeEvent<HTMLSelectElement>) => onInputchange( inputval, release_version)} />
                          </div>
                      </globalStateContext.Provider>
              </li>
          </ul>
          <ul>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ comment }>
                          <div className='listrows'> 
                            <label className="text_field_class"> Comment : </label> 
                            <Myinput inputHandeler = {(inputval : React.ChangeEvent<HTMLSelectElement>) => onInputchange( inputval, comment )} />
                          </div>
                      </globalStateContext.Provider>

            </li>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ pr_Link }>
                          <div className='listrows'>
                            <label className="text_field_class"> Pr Link : </label> 
                            <Myinput inputHandeler = {(inputval : React.ChangeEvent<HTMLSelectElement>) => onInputchange( inputval, pr_Link)} />
                          </div>
                      </globalStateContext.Provider>
            </li>
          </ul>
          <ul>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ globalStateContext._currentValue.Size }>
                          <div className='listrows'>
                            <label className="text_field_class"> Size : </label> 
                            <select className='option_List_style' onChange={(event: React.ChangeEvent<HTMLSelectElement>) => outputEvent(event,size)}>
                              <MyList />
                            </select>
                          </div>
                      </globalStateContext.Provider>
            </li>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ globalStateContext._currentValue.Dificulity }>
                          <div className='listrows'>
                            <label className="text_field_class"> Dificulity : </label> 
                            <select className='option_List_style' onChange={(tagname: React.ChangeEvent<HTMLSelectElement>) => outputEvent( tagname, dificulity)}>
                              <MyList />
                            </select>
                          </div>
                      </globalStateContext.Provider>
            </li>
            <li className='listinputs' >
                      <globalStateContext.Provider value={ Main_status_list }>
                          <div className='listrows'>
                            <label className="text_field_class"> Status List : </label> 
                      <select className='option_List_style' onChange={(event: React.ChangeEvent<HTMLSelectElement>) => changeList(event)}>
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
                      <RadioButton choosebutton = {(event : React.ChangeEvent<HTMLInputElement>) => changeHandle( event , { reveiwed_by_BY } )}/>
                    </globalStateContext.Provider>
            </li>
            <li className='text_value_radiobutton'>
                    <globalStateContext.Provider value = { reveiwed_by_AH }>
                    <strong>Reveiwed By AH :</strong>
                      <RadioButton choosebutton = {(event : React.ChangeEvent<HTMLInputElement>) => changeHandle( event, { reveiwed_by_AH } )}/>
                    </globalStateContext.Provider>
            </li>
            <li className='text_value_radiobutton'>
                    <globalStateContext.Provider value = { reveiwed_by_HT }>
                    <strong>Reveiwed By HT :</strong>
                      <RadioButton choosebutton = {(event : React.ChangeEvent<HTMLInputElement>) => changeHandle( event, { reveiwed_by_HT } )}/>
                    </globalStateContext.Provider>
            </li>
          </ul>
        </div>
        <input className="submitbutton" value="Update" type="submit" />
        </form>
    </div>
    </div>
}

export default UpdateForm;