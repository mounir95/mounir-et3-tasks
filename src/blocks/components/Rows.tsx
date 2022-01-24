import { IDarray } from '../../App';
// globalStateContext.conumer will provide the child with the value sent by the parent.
// | attribute of the state decalred in the parent)
// moreover the prop send by the parent (clickHandler)will be as an input to the child function 
// instead of this.prop.propname, and this function can have an input as we can see below.

const MyRow = () => {

   return (
        <IDarray.Consumer>
            {/* {value => value.map(e => <button onClick={() => clickHandler(e)} >{e}</button>) } */}
            {/* <select name="carBrand">{ value => value.map( e => <option value={e}>{e}</option> ) }</select> */}

            { value => value.map((i) => { 
                                     if(i.Myid >= 0){
                 return (
                                    <tr className='second_row_css'>
                                     <td>{ i.Mydate }</td>
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
                                     </tr> )
                   
              }
          }
                   )}
        </IDarray.Consumer>
   );
}
export  default MyRow