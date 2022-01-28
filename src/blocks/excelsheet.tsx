import '../App.css';
import { FC } from 'react';
import { ObjectArray, IDarray } from '../App'
import MyRow from './components/Rows'

  interface Props {
  SubmitDelete: Function,
  }

  const Excellsheet :FC<Props> = ( { SubmitDelete }) => {
    const arrayofids = IDarray._currentValue;
    let arrayofobjects = ObjectArray._currentValue;
    const lastIndex : number= arrayofids.length;
    for(let i = 1; i < lastIndex; i++){
    arrayofobjects[i] = arrayofobjects[i];
    }

    return (
    <div className='excelsheetalign'>
      <div>
              <ObjectArray.Provider value= { arrayofobjects }>
                <MyRow submitDeletrow= {(objectid : number) : Function => SubmitDelete(objectid)}/>
              </ObjectArray.Provider>
      </div>
    </div>
  )
}
export default Excellsheet;