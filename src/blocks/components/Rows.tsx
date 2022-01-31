import { FC, useState } from 'react';
import { FaPencilAlt, FaSave } from 'react-icons/fa';
import { Context } from 'vm';
import { ObjectArray } from '../../App';
import UpdateForm from '../../blocks/UpdateBlock'
import RowLists from './inputfolder/rowtablelist'

interface Props{
    submitDeletrow : Function,
}

const MyRow :FC<Props>= ( { submitDeletrow }) => {
    const [ { pencil_save, updateFormisHidden, editd_object_id }, changeIcon ] = useState({
        pencil_save : <FaPencilAlt />,
        updateFormisHidden : true,
        editd_object_id : -1
    })

    const submitUpdate = (id : number) => {
        if( pencil_save.type.name === 'FaPencilAlt'){
            changeIcon(val => val = { updateFormisHidden : false, editd_object_id : id, pencil_save : <FaSave /> })
                }
                else{
            changeIcon({ pencil_save : <FaPencilAlt />, updateFormisHidden : true, editd_object_id : -1 })
                }
    }

   return (
<div>
    <table className='table_excelsheet'>
        <tr className='first_row_css'>
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
        <ObjectArray.Consumer>
            { (value : Context ) => value.map((i : Context) => { 
                if(i.Myid >= 0){
                 return (
                     <RowLists value={i} buttonvalue={ pencil_save } buttonsaveval = {<FaSave />} 
                        idpressed = {editd_object_id}
                        OnupdateSumit={(choosedid : number ) => submitUpdate(choosedid)} 
                        OndeleteSubmit={() => submitDeletrow(i.Myid)}/>
                 )
              }
          }
                   )}
        </ObjectArray.Consumer>
    </table>
    { !updateFormisHidden && <UpdateForm updated_id_value={ editd_object_id } ></UpdateForm> }
</div>
   );
}
export  default MyRow