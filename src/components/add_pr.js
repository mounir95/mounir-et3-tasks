import React from 'react';
import { MyFinalObject } from '../myconstants/themeContext'
import '../App.css';

export const Addfun = () => {


    return <div className="App">
        {/* <div>GlobalStateContext Values</div>
        <div>MY Date : { MyFinalObject.Mydate } </div>
        <div>MY SE_List : { MyFinalObject.Myse_list } </div>
        <div>MY Id : { MyFinalObject.Myid } </div>
        <div>MY Platform : { MyFinalObject.Myplatform } </div>
        <div>MY Release Version : { MyFinalObject.Myrelease_version } </div>
        <div>MY Comment : { MyFinalObject.Mycomment } </div>
        <div>MY PR_Link : { MyFinalObject.Mypr_Link } </div>
        <div>MY Size : { MyFinalObject.Mysize } </div>
        <div>MY Difiiculity : { MyFinalObject.Mydificulity } </div> */}
        <table>
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
         </tr>
      </table>

        </div>
}

export default Addfun;