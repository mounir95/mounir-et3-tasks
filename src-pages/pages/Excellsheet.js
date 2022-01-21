import { Outlet, Link } from "react-router-dom";
import React, {useState} from 'react';
import { MyFinalObject, MyFinalArray } from '../myconstants/themeContext'
import '../App.css';

const Excellsheet = () => {
  // const { Id, Date, SE, Platform, Release_Version, Comment, Pr_Link, Size, Difiiculity} =React.useContext(globalStateContext); 
  // console.log(React.useContext(globalStateContext)); console.log(useState( React.useContext(globalStateContext).Date ));
  let e;
  console.log(MyFinalObject)
  console.log(MyFinalArray)
  Object.keys(MyFinalArray).forEach(keyid =>
    { 
      console.log(keyid)
        e = MyFinalArray[1];
     }
   );


  return (
    <div className='add_pr'>
      <div>
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
                                <td>{ e.Mydate }</td>
                                <td>{ e.Myse_list }</td>
                                <td>{ e.Myid }</td>
                                <td>{ e.Myplatform }</td>
                                <td>{ e.Myrelease_version }</td>
                                <td>{ e.Mycomment }</td>
                                <td>{ e.Mypr_Link }</td>
                                <td>{ e.Mysize }</td>
                                <td>{ e.Mydificulity }</td>
                                <td>{ e.Mystatus_list }</td>
                                <td>{ e.Myreveiwed_by_BY }</td>
                                <td>{ e.Myreveiwed_by_AH }</td>
                                <td>{ e.Myreveiwed_by_HT }</td>
              </tr>
          </table>
      </div>
      <div className="App_add_par">
      <Link to="/" className="btn btn-primary">Add New User</Link>
      </div>
    </div>
  )
}
export default Excellsheet;