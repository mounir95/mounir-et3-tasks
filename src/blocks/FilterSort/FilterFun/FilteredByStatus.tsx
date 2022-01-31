import { FC } from 'react';
import { globalStateContext } from '../../../contants/UseContext';
import SelectListFilter from '../../components/inputfolder/SelectListFilter'

interface Props{
    commentFun : Function,
    setrefresh : boolean
}

const FilteredByStatus : FC<Props> = ({ commentFun, setrefresh }) => {

    return (<td>
                            <label>Filter By Status : </label>
                <globalStateContext.Provider value={globalStateContext._currentValue.Status_list }>
                { setrefresh && <select
                        onChange={(event : React.ChangeEvent<HTMLSelectElement>) => commentFun(event)}>
                        <option selected disabled>Choose Status List :</option>
                        <SelectListFilter />
                    </select> }
                { !setrefresh && <select
                    onChange={(event : React.ChangeEvent<HTMLSelectElement>) => commentFun(event)}>
                    <option selected disabled>Choose Status List :</option>
                    <SelectListFilter />
                </select> }
                </globalStateContext.Provider>
            </td>
    )
}
export default FilteredByStatus