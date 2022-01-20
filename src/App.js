import './App.css';
import React, { useState } from 'react';
import { globalStateContext, EmptyObject, MyFinalObject } from './myconstants/themeContext'
import Addfun from './components/add_pr'
import MyList from './components/mylist'
import Myinput from './components/myinput'
// the concept of useContext is to use the globalvariables(saved in globalstateContext) was saved in the create context.
// globalStateContext.Provider will provide the child with (all/any globalstateContext 
// | attribute of the state decalred in the parent)
// moreover we can sent a prop wich is clickHandler to the child as input of child function instead of this.functionname, 
// this prop will call a function and have the action in the parent side and can take an input from the child as below.

let App = () => {
  // const { Id, Date, SE, Platform, Release_Version, Comment, Pr_Link, Size, Difiiculity} =React.useContext(globalStateContext); 
  // console.log(React.useContext(globalStateContext)); console.log(useState( React.useContext(globalStateContext).Date ));
  const [ { id , date, se_list, comment, size, dificulity, platform, pr_Link, release_version, isHidden } , setChanges] = useState( 
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
      isHidden : true
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

  EmptyObject.Myse_list = se_list[0];
  EmptyObject.Mycomment = comment;
  EmptyObject.Mysize = size[0];
  EmptyObject.Mydificulity = dificulity[0];
  EmptyObject.Myplatform = platform[0];
  EmptyObject.Myrelease_version = release_version;
  EmptyObject.Mypr_Link = pr_Link;

  const handleSubmit = (event) => {
    event.preventDefault();
    setChanges(val => val = { ...val , id : val.id + 1 , isHidden : false } );
    MyFinalObject.Myid = EmptyObject.Myid;
    MyFinalObject.Mydate = EmptyObject.Mydate;
    MyFinalObject.Myse_list = EmptyObject.Myse_list
    MyFinalObject.Mycomment = EmptyObject.Mycomment;
    MyFinalObject.Mysize = EmptyObject.Mysize;
    MyFinalObject.Mydificulity = EmptyObject.Mydificulity;
    MyFinalObject.Myplatform = EmptyObject.Myplatform;
    MyFinalObject.Myrelease_version = EmptyObject.Myrelease_version;
    MyFinalObject.Mypr_Link = EmptyObject.Mypr_Link;
  }

  return <div>
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
        </ul>
        <input className="submitbutton" type="submit" />

        </form>
    </div>
    <div className="App_add_par">
      { !isHidden && <Addfun></Addfun> }
    </div>
    </div>
}

export default App;
