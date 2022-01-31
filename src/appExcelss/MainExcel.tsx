import { FC } from 'react';
import Excellsheet from '../blocks/ExcelSheet';
import FilterByDate from '../blocks/FilterByDate';

interface Props{
    clickval : string,
    filter : boolean,
    Ondelet : Function,
    onAdd : Function,
    setchanges : Function
}

const MainEexcel: FC<Props> = ({ clickval, filter, Ondelet, onAdd, setchanges}) => {
    return ( <div className='excelsheetcss'>
        { filter === true && <div>
        <FilterByDate SubmitingChanges={() => setchanges()} />
        <Excellsheet SubmitDelete={(objectid : number) : void => Ondelet(objectid)}></Excellsheet>
        <button className='AddClose_button' onClick={() => onAdd(clickval)}>{ clickval }</button>
        </div>
       }
       </div>
    )
}
export default MainEexcel