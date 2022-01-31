import '../App.css';
import { FC } from 'react';
import { ObjectArray } from '../App'
import MyRow from './components/Rows'

  interface Props {
  SubmitDelete: Function,
  }

  const Excellsheet :FC<Props> = ( { SubmitDelete }) => {
    let arrayofobjects = ObjectArray._currentValue;
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