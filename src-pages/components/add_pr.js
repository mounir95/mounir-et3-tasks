import React, {useState} from 'react';
import { MyFinalObject, globalStateContext, EmptyObject } from '../myconstants/themeContext'
import '../App.css';

// the concept of useContext is to use the globalvariables(saved in globalstateContext) was saved in the create context.
// globalStateContext.Provider will provide the child with (all/any globalstateContext 
// | attribute of the state decalred in the parent)
// moreover we can sent a prop wich is clickHandler to the child as input of child function instead of this.functionname, 
// this prop will call a function and have the action in the parent side and can take an input from the child as below.

export const Addfun = () => {
   // const { Id, Date, SE, Platform, Release_Version, Comment, Pr_Link, Size, Difiiculity} =React.useContext(globalStateContext); 
  // console.log(React.useContext(globalStateContext)); console.log(useState( React.useContext(globalStateContext).Date ));
    
  const [{ isHidden }, setChange ] = useState({ isHidden : true })

  let AddHandle = (event) => {
    event.preventDefault();
    setChange(val => val = { isHidden : false })
  }

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
                <td>{ MyFinalObject.Mydate }</td>
                <td>{ MyFinalObject.Myse_list }</td>
                <td>{ MyFinalObject.Myid }</td>
                <td>{ MyFinalObject.Myplatform }</td>
                <td>{ MyFinalObject.Myrelease_version }</td>
                <td>{ MyFinalObject.Mycomment }</td>
                <td>{ MyFinalObject.Mypr_Link }</td>
                <td>{ MyFinalObject.Mysize }</td>
                <td>{ MyFinalObject.Mydificulity }</td>
                <td>{ MyFinalObject.Mystatus_list }</td>
                <td>{ MyFinalObject.Myreveiwed_by_BY }</td>
                <td>{ MyFinalObject.Myreveiwed_by_AH }</td>
                <td>{ MyFinalObject.Myreveiwed_by_HT }</td>
              </tr>
          </table>
          <form className='button_table' onSubmit={AddHandle}>
            <input className="Add_editted_button" type="submit" value="Add" />
          </form>
      </div>
      <div className="App_add_par">
      { !isHidden && <Addfun />}
      </div>
    </div>
  )
}
export default Addfun;