import '../App.css';
import { FC } from 'react';
import { ObjectArray, IDarray } from '../App'
import MyRow from './components/Rows'

interface Props {
  SubmitDelete:any,
}

const Excellsheet :FC<Props> = ( { SubmitDelete }) => {
  let arrayofids = IDarray._currentValue;
  let arrayofobjects = ObjectArray._currentValue;

var lastIndex : number= arrayofids.length;
for(let i = 1; i < lastIndex; i++){
  arrayofobjects[i] = arrayofobjects[i];
}
// console.log(' Excel Sheet')
// console.log(arrayofids)
// console.log(arrayofobjects)

  return (
    <div className='excelsheetalign'>
      <div>
              <ObjectArray.Provider value= { arrayofobjects }>
                <MyRow submitDeletrow= {(objectid : number) : any => SubmitDelete(objectid)}/>
              </ObjectArray.Provider>
      </div>
    </div>
  )
}
export default Excellsheet;