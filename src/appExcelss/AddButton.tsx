import { FC } from 'react';
import AddForm from '../blocks/FormBlock';

interface Props{
    formisHidden : boolean,
    AddFomrmfun : Function,
}

const AddButtonfun : FC<Props> = ({ formisHidden, AddFomrmfun}) => {
    return ( <div className='excelsheetcss'>
        { !formisHidden && <AddForm handleChange={(id : number) : void => AddFomrmfun(id)} ></AddForm> }
       </div>
    )
}
export default AddButtonfun