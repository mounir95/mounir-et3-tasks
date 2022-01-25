import '../App.css';
import { ObjectArray, IDarray } from '../App'
import MyRow from './components/Rows'

const Excellsheet = ( ) => {
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
              <IDarray.Provider value= { arrayofobjects }>
                <MyRow />
              </IDarray.Provider>
          </table>
      </div>
    </div>
  )
}
export default Excellsheet;