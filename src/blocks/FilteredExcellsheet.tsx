import '../App.css';
import { FilteredObjectArray } from '../App'
import FilteredRow from './components/FilteredRows'

  const FilteredExcellsheet = ( ) => {
    let arrayofobjects = FilteredObjectArray._currentValue;
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