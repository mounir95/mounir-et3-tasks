import '../App.css';
import React, { useState } from 'react';
import { globalStateContext, EmptyObject, MyFinalObject } from '../myconstants/themeContext'
import MyList from './mylist'
import Myinput from './myinput'
import RadioButton from './radiobutton';
// the concept of useContext is to use the globalvariables(saved in globalstateContext) was saved in the create context.
// globalStateContext.Provider will provide the child with (all/any globalstateContext 
// | attribute of the state decalred in the parent)
// moreover we can sent a prop wich is clickHandler to the child as input of child function instead of this.functionname, 
// this prop will call a function and have the action in the parent side and can take an input from the child as below.

export const Addfun = ( { onChildClick }) => {
   // const { Id, Date, SE, Platform, Release_Version, Comment, Pr_Link, Size, Difiiculity} =React.useContext(globalStateContext); 
  // console.log(React.useContext(globalStateContext)); console.log(useState( React.useContext(globalStateContext).Date ));
  const [ { id , date, se_list, comment, size, dificulity, platform, pr_Link, release_version, status_list, Main_status_list, reveiwed_by_BY, reveiwed_by_AH, reveiwed_by_HT } , setChanges] = useState( 
    { 
      id : React.useContext(globalStateContext).Id, 
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
    EmptyObject.Myid = id;
    EmptyObject.Mydate = date;

  let onInputchange = (event, Atribuite) => {
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

  let outputEvent = (event, parentData) =>{
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

  let changeList = (event) => {
    setChanges(val => val = {...val, status_list : [ event.target.value ] })
 }

 let handleChange = ( event, attribute ) => {
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

  EmptyObject.Myse_list = se_list[0];
  EmptyObject.Mycomment = comment;
  EmptyObject.Mysize = size[0];
  EmptyObject.Mydificulity = dificulity[0];
  EmptyObject.Myplatform = platform[0];
  EmptyObject.Myrelease_version = release_version;
  EmptyObject.Mypr_Link = pr_Link;
  EmptyObject.Mystatus_list = status_list[0];
  EmptyObject.Myreveiwed_by_BY = reveiwed_by_BY;
  EmptyObject.Myreveiwed_by_AH = reveiwed_by_AH;
  EmptyObject.Myreveiwed_by_HT = reveiwed_by_HT;

  const handleSubmit = (event) => {
    event.preventDefault();
    setChanges(val => val = { ...val , id : val.id + 1 } );
    MyFinalObject.Myid = EmptyObject.Myid;
    MyFinalObject.Mydate = EmptyObject.Mydate;
    MyFinalObject.Myse_list = EmptyObject.Myse_list
    MyFinalObject.Mycomment = EmptyObject.Mycomment;
    MyFinalObject.Mysize = EmptyObject.Mysize;
    MyFinalObject.Mydificulity = EmptyObject.Mydificulity;
    MyFinalObject.Myplatform = EmptyObject.Myplatform;
    MyFinalObject.Myrelease_version = EmptyObject.Myrelease_version;
    MyFinalObject.Mypr_Link = EmptyObject.Mypr_Link;
    MyFinalObject.Mystatus_list = EmptyObject.Mystatus_list;
    MyFinalObject.Myreveiwed_by_BY = EmptyObject.Myreveiwed_by_BY;
    MyFinalObject.Myreveiwed_by_AH = EmptyObject.Myreveiwed_by_AH;
    MyFinalObject.Myreveiwed_by_HT = EmptyObject.Myreveiwed_by_HT;
    console.log(MyFinalObject)
  }

  let handleClick = (event) => {
    onChildClick(true);
};

  return (
  <div>
    <div className="My_Form">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li className='listinputs' ><h2 > Date : { date } </h2></li>
          <li className='listinputs' >
                      <globalStateContext.Provider value={ React.useContext(globalStateContext).SE_list }>
                        <div className='listrows'>
                          <textfield className="text_field_class"> SE List : </textfield> 
                          <select  onChange={(event) => outputEvent(event,se_list)}>
                            <MyList />
                          </select>
                        </div>
                      </globalStateContext.Provider>
          </li>
          <li className='listinputs' >
                    <globalStateContext.Provider value={ React.useContext(globalStateContext).Platform }>
                        <div className='listrows'>
                          <textfield className="text_field_class"> Platform : </textfield> 
                          <select onChange={(event) => outputEvent(event,platform)}>
                            <MyList />
                          </select>
                        </div>
                    </globalStateContext.Provider>
          </li>
          <li className='listinputs' >
                    <globalStateContext.Provider value={ release_version }>
                        <div className='listrows'>
                          <textfield className="text_field_class"> Release Version : </textfield> 
                          <Myinput inputHandeler = {(inputval) => onInputchange( inputval, release_version)} />
                        </div>
                    </globalStateContext.Provider>
            </li>
          <li className='listinputs' >
                    <globalStateContext.Provider value={ comment }>
                        <div className='listrows'> 
                          <textfield className="text_field_class"> Comment : </textfield> 
                          <Myinput inputHandeler = {(inputval) => onInputchange( inputval, comment )} />
                        </div>
                    </globalStateContext.Provider>

          </li>
          <li className='listinputs' >
                    <globalStateContext.Provider value={ pr_Link }>
                        <div className='listrows'>
                          <textfield className="text_field_class"> Pr Link : </textfield> 
                          <Myinput inputHandeler = {(inputval) => onInputchange( inputval, pr_Link)} />
                        </div>
                    </globalStateContext.Provider>
          </li>
          <li className='listinputs' >
                    <globalStateContext.Provider value={ React.useContext(globalStateContext).Size }>
                        <div className='listrows'>
                          <textfield className="text_field_class"> Size : </textfield> 
                          <select  onChange={(event) => outputEvent(event,size)}>
                            <MyList />
                          </select>
                        </div>
                    </globalStateContext.Provider>
          </li>
          <li className='listinputs' >
                    <globalStateContext.Provider value={ React.useContext(globalStateContext).Dificulity }>
                        <div className='listrows'>
                          <textfield className="text_field_class"> Difiiculity : </textfield> 
                          <select onChange={(tagname) => outputEvent( tagname, dificulity)}>
                            <MyList />
                          </select>
                        </div>
                    </globalStateContext.Provider>
          </li>
          <li>
               <div> Status List :
                  <globalStateContext.Provider value={ Main_status_list }>
                     <select onChange={(event) => changeList(event)}>
                        <MyList />
                     </select>
                  </globalStateContext.Provider>
               </div>
          </li>
          <li>
                  <globalStateContext.Provider value = { reveiwed_by_BY }>
                  <strong>Reveiwed By BH :</strong>
                     <RadioButton choosebutton = {(event) => handleChange( event, { reveiwed_by_BY } )}/>
                  </globalStateContext.Provider>
          </li>
          <li>
                  <globalStateContext.Provider value = { reveiwed_by_AH }>
                  <strong>Reveiwed By AH :</strong>
                     <RadioButton choosebutton = {(event) => handleChange( event, { reveiwed_by_AH } )}/>
                  </globalStateContext.Provider>
          </li>
          <li>
                  <globalStateContext.Provider value = { reveiwed_by_HT }>
                  <strong>Reveiwed By HT :</strong>
                     <RadioButton choosebutton = {(event) => handleChange( event, { reveiwed_by_HT } )}/>
                  </globalStateContext.Provider>
          </li>
        </ul>
        <input className="submitbutton" value="Save" type="submit" />
        </form>
        <button onClick={handleClick}>submit</button>
    </div>
    </div>
  )
}
export default Addfun;