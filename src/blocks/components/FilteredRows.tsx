import { FC } from 'react';
import { Context } from 'vm';
import { FilteredObjectArray } from '../../App';

const FilteredRow = ( ) => {

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
        <FilteredObjectArray.Consumer>
            { (value : Context ) => value.map((i : Context) => { 
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
                </tr>
                 )
              }
          }
                   )}
        </FilteredObjectArray.Consumer>
    </table>
</div>
   );
}
export  default FilteredRow