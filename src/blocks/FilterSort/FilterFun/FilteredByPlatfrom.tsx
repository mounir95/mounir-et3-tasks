import { FC } from 'react';
import { globalStateContext } from '../../../contants/UseContext';
import SelectListFilter from '../../components/inputfolder/SelectListFilter'

interface Props{
    commentFun : Function,
    setrefresh : boolean
}

const FilteredByPlatfrom : FC<Props> = ({ commentFun, setrefresh }) => {

    return (<td>
        <label >Filter By Platform : </label>
                <globalStateContext.Provider value={globalStateContext._currentValue.Platform }>
                { setrefresh &&  <select
                        onChange={(event : React.ChangeEvent<HTMLSelectElement>) => commentFun(event)}>
                                <option selected disabled>Choose Platform :</option>
                        <SelectListFilter />
                    </select> }
                { !setrefresh &&  <select
                        onChange={(event : React.ChangeEvent<HTMLSelectElement>) => commentFun(event)}>
                                <option selected disabled>Choose Platform :</option>
                        <SelectListFilter />
                    </select>
            } 
            </globalStateContext.Provider> 
            </td>
    )
}
export default FilteredByPlatfrom