import '../App.css';
import { FilteredObjectArray, FiltereIDarray } from '../App'
import FilteredRow from './components/FilteredRows'

  const FilteredExcellsheet = ( ) => {
    const arrayofids = FiltereIDarray._currentValue;
    let arrayofobjects = FilteredObjectArray._currentValue;
    const lastIndex : number= arrayofids.length;
    for(let i = 1; i < lastIndex; i++){
    arrayofobjects[i] = arrayofobjects[i];
    }

    return (
    <div className='excelsheetalign'>
      <div>
              <FilteredObjectArray.Provider value= { arrayofobjects }>
                <FilteredRow />
              </FilteredObjectArray.Provider>
      </div>
    </div>
  )
}
export default FilteredExcellsheet;
  ;