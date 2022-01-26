import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPencilAlt, FaSave } from 'react-icons/fa';
import { IDarray } from '../../App';
import UpdateForm from '../../blocks/UpdateBlock'

// globalStateContext.conumer will provide the child with the value sent by the parent.
// | attribute of the state decalred in the parent)
// moreover the prop send by the parent (clickHandler)will be as an input to the child function 
// instead of this.prop.propname, and this function can have an input as we can see below.

const MyRow = ( { submitDeletrow, submitEditrow }) => {

    let [ { pencil_save, updateFormisHidden, editd_object_id }, changeIcon ] = useState({
        pencil_save : <FaPencilAlt />,
        updateFormisHidden : true,
        editd_object_id : 1
    })

    const submitUpdate = (id) => {
        if( pencil_save.type.name === 'FaPencilAlt'){
            changeIcon(val => val = { ...val,pencil_save : <FaSave />, 
                updateFormisHidden : false, editd_object_id : id })
        }
        else{
            changeIcon(val => val = { ...val,pencil_save : <FaPencilAlt />, 
                updateFormisHidden : true, editd_object_id : id })
        }
        submitEditrow(id);
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
        <IDarray.Consumer>
            {/* {value => value.map(e => <button onClick={() => clickHandler(e)} >{e}</button>) } */}
            {/* <select name="carBrand">{ value => value.map( e => <option value={e}>{e}</option> ) }</select> */}

            { value => value.map((i) => { 
                                     if(i.Myid >= 0){
                 return (
                                    <tr className='second_row_css'>
                                     <td>{ JSON.stringify(i.Mydate) }</td>
                                     <td>{ i.Myse_list }</td>
                                     <td>{ i.Myid }</td>
                                     <td>{ i.Myplatform }</td>
                                     <td>{ i.Myrelease_version }</td>
                                     <td>{ i.Mycomment }</td>
                                     <td>{ i.Mypr_Link }</td>
                                     <td>{ i.Mysize }</td>
                                     <td>{ i.Mydificulity }</td>
                                     <td>{ i.Mystatus_list }</td>
                                     <td>{ i.Myreveiwed_by_BY }</td>
                                     <td>{ i.Myreveiwed_by_AH }</td>
                                     <td>{ i.Myreveiwed_by_HT }</td>
                                     <button onClick={() => submitDeletrow(i.Myid)}>X</button>
                                     <button onClick={() =>submitUpdate(i.Myid) }>{ pencil_save }</button>
                                     </tr>
                                             )
                   
              }
          }
                   )}
        </IDarray.Consumer>
    </table>
    { !updateFormisHidden && <UpdateForm updated_id_value={ editd_object_id } ></UpdateForm> }
</div>
   );
}
export  default MyRow