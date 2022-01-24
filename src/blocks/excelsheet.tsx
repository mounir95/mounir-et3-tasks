import React, {FC} from "react";
import { useState } from "react";
import '../App.css';
import { ObjectArray } from '../blocks/FormBlock'
import { IDarray } from "../App";
import MyRow from '../blocks/components/Rows'

interface Props {
  addhandleChange:any,
}
let arrayofObjects = [];

const Excellsheet :FC<Props> = ( { addhandleChange } ) => {

  const [ { arrayofids , arrayofobjects } , setchanges ] = useState({
    arrayofids : React.useContext(IDarray),
    arrayofobjects : React.useContext(ObjectArray)
  })

var lastIndex : number= arrayofids.length;
for(let i = 1; i < lastIndex; i++){
  arrayofObjects[i] = arrayofobjects[i];
}

  return (
    <div className='excelsheetalign'>
      <div>
          <table className='table_excelsheet'>
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
              <IDarray.Provider value= { arrayofObjects }>
                <MyRow />
              </IDarray.Provider>
          </table>
      </div>
      <div className="App_add_par">
        <button onClick={() => addhandleChange()}>Add</button>
      </div>
    </div>
  )
}
export default Excellsheet;