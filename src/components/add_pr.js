import React, {useState} from 'react';
import { MyFinalObject, globalStateContext, EmptyObject } from '../myconstants/themeContext'
import '../App.css';
import MyList from './mylist';
import RadioButton from './radiobutton';

// let myarray= [MyFinalObject];
// console.log("i am here")
// console.log(myarray);
// console.log(myarray[0]);
// console.log(myarray[0].Mydate);
// console.log(MyFinalObject.Mydate);
// console.log(myarray[0]["Mydate"]);
// export const MyFinalArray = React.createContext(myarray);

export const Addfun = () => {
   const [ { status_list, Main_status_list, reveiwed_by_BY, reveiwed_by_AH, reveiwed_by_HT, tableisHidden } , setChange] = useState(
     {
      status_list : React.useContext(globalStateContext).Status_list,
      Main_status_list : React.useContext(globalStateContext).Status_list,
      reveiwed_by_BY : React.useContext(globalStateContext).Reveiwed_by_BY,
      reveiwed_by_AH : React.useContext(globalStateContext).Reveiwed_by_AH,
      reveiwed_by_HT : React.useContext(globalStateContext).Reveiwed_by_HT,
      tableisHidden : true
     }
   )

   let changeList = (event) => {
      setChange(val => val = {...val, status_list : [ event.target.value ] })
   }

   let handleChange = ( event, attribute ) => {
      if(Object.keys(attribute).toString() === 'reveiwed_by_BY' ){
         setChange( val => val = {...val, reveiwed_by_BY : event.target.value })
      }
      else if(Object.keys(attribute).toString() === 'reveiwed_by_AH' ){
         setChange( val => val = {...val, reveiwed_by_AH : event.target.value })
      }
      else if(Object.keys(attribute).toString() === 'reveiwed_by_HT' ){
         setChange( val => val = {...val, reveiwed_by_HT : event.target.value })
      }
   }

   EmptyObject.Mystatus_list = status_list[0];
   EmptyObject.Myreveiwed_by_BY = reveiwed_by_BY;
   EmptyObject.Myreveiwed_by_AH = reveiwed_by_AH;
   EmptyObject.Myreveiwed_by_HT = reveiwed_by_HT;

   let handleSubmit = (event) => {
      event.preventDefault();
      setChange(val => val = { ...val , tableisHidden : false} );
      MyFinalObject.Mystatus_list = EmptyObject.Mystatus_list;
      MyFinalObject.Myreveiwed_by_BY = EmptyObject.Myreveiwed_by_BY;
      MyFinalObject.Myreveiwed_by_AH = EmptyObject.Myreveiwed_by_AH;
      MyFinalObject.Myreveiwed_by_HT = EmptyObject.Myreveiwed_by_HT;
   }

    return (
      <div className='add_pr'>
            <form className='button_table' onSubmit={handleSubmit}>
               {/* <div> Status List :
                  <globalStateContext.Provider value={ Main_status_list }>
                     <select onChange={(event) => changeList(event)}>
                        <MyList />
                     </select>
                  </globalStateContext.Provider>
               </div> */}
                  {/* <globalStateContext.Provider value = { reveiwed_by_BY }>
                  <strong>Reveiwed By BH :</strong>
                     <RadioButton choosebutton = {(event) => handleChange( event, { reveiwed_by_BY } )}/>
                  </globalStateContext.Provider> */}
                  {/* <globalStateContext.Provider value = { reveiwed_by_AH }>
                  <strong>Reveiwed By AH :</strong>
                     <RadioButton choosebutton = {(event) => handleChange( event, { reveiwed_by_AH } )}/>
                  </globalStateContext.Provider> */}
                  {/* <globalStateContext.Provider value = { reveiwed_by_HT }>
                  <strong>Reveiwed By HT :</strong>
                     <RadioButton choosebutton = {(event) => handleChange( event, { reveiwed_by_HT } )}/>
                  </globalStateContext.Provider> */}
            <table className='table_add_pr'>
               <tr>
                  <th>Date</th>
                  <th>SE_List</th>
                  <th>#</th>
                  <th>Platform</th>
                  <th>Release Version</th>
                  <th>Comment</th>
                  <th>PR_Link</th>
                  <th>Size</th>
                  <th>Difiiculity</th>
                  <th>Status List</th>
                  <th>Reveiwed By BY</th>
                  <th>Reveiwed By AH</th>
                  <th>Reveiwed By HT</th>
               </tr>
               <tr>
                  <td>{ MyFinalObject.Mydate }</td>
                  <td>{ MyFinalObject.Myse_list }</td>
                  <td>{ MyFinalObject.Myid }</td>
                  <td>{ MyFinalObject.Myplatform }</td>
                  <td>{ MyFinalObject.Myrelease_version }</td>
                  <td>{ MyFinalObject.Mycomment }</td>
                  <td>{ MyFinalObject.Mypr_Link }</td>
                  <td>{ MyFinalObject.Mysize }</td>
                  <td>{ MyFinalObject.Mydificulity }</td>
                  <td>
                     <globalStateContext.Provider value={ Main_status_list }>
                        <select onChange={(event) => changeList(event)}>
                           <MyList />
                        </select>
                     </globalStateContext.Provider>
                  </td>
                  <td>                  
                     <globalStateContext.Provider value = { reveiwed_by_BY }>
                        <RadioButton choosebutton = {(event) => handleChange( event, { reveiwed_by_BY } )}/>
                     </globalStateContext.Provider>
                  </td>
                  <td>
                     <globalStateContext.Provider value = { reveiwed_by_AH }>
                        <RadioButton choosebutton = {(event) => handleChange( event, { reveiwed_by_AH } )}/>
                     </globalStateContext.Provider>
                  </td>
                  <td>
                     <globalStateContext.Provider value = { reveiwed_by_HT }>
                        <RadioButton choosebutton = {(event) => handleChange( event, { reveiwed_by_HT } )}/>
                     </globalStateContext.Provider>
                  </td>
               </tr>
            </table>
            <input className="save_editted_button" type="submit" value="Save" />
         </form> 
      </div>
    )
}

export default Addfun;