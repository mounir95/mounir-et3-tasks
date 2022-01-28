import '../App.css';
import React, { FC, useState } from 'react';
import RadioButtons from './components/RadioButtons'
import SelectLists from './components/SelectLists';
import FirstColumn from './components/FirstColumn';
import TextInputs from './components/TextInputs';
import { ObjectArray } from '../App';
import { Context } from 'vm';

interface Props {
  updated_id_value : number ,
}

const UpdateForm :FC<Props> = ( { updated_id_value } ) => {
  const [ { id } , setChanges] = useState( 
    { 
      id : updated_id_value, 
    });

  const handleSubmitUpdate = (event: React.FormEvent<HTMLFormElement>) : void => {
    ObjectArray._currentValue.map((e: Context) => {
        if(e.Myid === updated_id_value){
            e.Myid = id;
            e.Myse_list = ObjectArray.Myse_list;
            e.Myplatform = ObjectArray.Myplatform;
            e.Myrelease_version = ObjectArray.Myrelease_version;
            e.Mystatus_list = ObjectArray.Mystatus_list;
            e.Mysize = ObjectArray.Mysize;
            e.Mydificulity = ObjectArray.Mydificulity;
            e.Mypr_Link = ObjectArray.Mypr_Link;
            e.Mycomment = ObjectArray.Mycomment;
            e.Myreveiwed_by_BY = ObjectArray.Myreveiwed_by_BY;
            e.Myreveiwed_by_AH = ObjectArray.Myreveiwed_by_AH;
            e.Myreveiwed_by_HT = ObjectArray.Myreveiwed_by_HT;
          }    
      })
    event.preventDefault();
  }

  return (
    <div className="My_Form">
      <h1>Update Record</h1>
      <form onSubmit={handleSubmitUpdate}>
        <table>
          <tr>
            <td><FirstColumn /></td>
            <td><TextInputs /></td>
            <td><SelectLists /></td>
            <td><RadioButtons /></td>
          </tr>
        </table>
        <input className="submitbutton" value="Update" type="submit" />
      </form>
    </div>
  )
}

export default UpdateForm;