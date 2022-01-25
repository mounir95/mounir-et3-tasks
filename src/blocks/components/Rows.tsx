import { useState } from 'react';
import { IDarray } from '../../App';
// globalStateContext.conumer will provide the child with the value sent by the parent.
// | attribute of the state decalred in the parent)
// moreover the prop send by the parent (clickHandler)will be as an input to the child function 
// instead of this.prop.propname, and this function can have an input as we can see below.

const MyRow = ( { submitDeletrow, submitEditrow }) => {

    let GetUpdatedRow = (i) => {
            let updatedobject = {
                Mydate : i.Mydate,
                Myse_list : i.Myse_list,
                Myid : i.Myid,
                Myplatform : i.Myplatform,
                Myrelease_version : i.Myrelease_version,
                Mycomment : i.Mycomment,
                Mypr_Link : i.Mypr_Link,
                Mysize : i.Mysize,
                Mydificulity : i.Mydificulity,
                Mystatus_list : i.Mystatus_list,
                Myreveiwed_by_BY : i.Myreveiwed_by_BY,
                Myreveiwed_by_AH : i.Myreveiwed_by_AH,
                Myreveiwed_by_HT : i.Myreveiwed_by_HT              
            }
        submitEditrow(updatedobject);
    }

   return (
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
                                     <button onClick={() => submitDeletrow(i)}>X</button>
                                     <button onClick={() => GetUpdatedRow(i)}>edit</button>
                                     </tr> )
                   
              }
          }
                   )}
        </IDarray.Consumer>
   );
}
export  default MyRow