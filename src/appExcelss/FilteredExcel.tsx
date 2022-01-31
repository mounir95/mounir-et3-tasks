import { FC } from 'react';
import FilteredExcellsheet from '../blocks/FilteredExcellsheet'

interface Props{
    FilterView : boolean,
    onDone : Function,
}

const FilteredExcel: FC<Props> = ({ FilterView, onDone }) => {
    return ( 
    <div className='excelsheetcss'>
        { FilterView === false && <div>
        <FilteredExcellsheet ></FilteredExcellsheet>
        <button className='AddClose_button' onClick={() => onDone()}> Done </button>
      </div> }
    </div>
    )
}
export default FilteredExcel