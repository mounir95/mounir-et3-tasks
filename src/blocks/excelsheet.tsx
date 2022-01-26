import '../App.css';
import { ObjectArray, IDarray } from '../App'
import MyRow from './components/Rows'

const Excellsheet = ( { SubmitDelete, SubmitEditrow }) => {
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
              <IDarray.Provider value= { arrayofobjects }>
                <MyRow submitEditrow={(objectid) => SubmitEditrow(objectid) } submitDeletrow= {(objectid) => SubmitDelete(objectid)}/>
              </IDarray.Provider>
      </div>
    </div>
  )
}
export default Excellsheet;