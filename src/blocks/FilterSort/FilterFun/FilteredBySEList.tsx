import { FC } from 'react';
import { globalStateContext } from '../../../contants/UseContext';
import SelectListFilter from '../../components/inputfolder/SelectListFilter'

interface Props{
    commentFun : Function,
    setrefresh : boolean
}

const FilteredBySEList : FC<Props> = ({ commentFun, setrefresh }) => {

    return (<td>
                                    <label className="select_selist">Filters By SE List : </label> 
                <globalStateContext.Provider value={globalStateContext._currentValue.SE_list }>
                { setrefresh && <select
                        onChange={(event : React.ChangeEvent<HTMLSelectElement>) => commentFun(event)}>
                                <option selected disabled>Choose SE List :</option>
                        <SelectListFilter />
                    </select> }
                { !setrefresh && <select
                        onChange={(event : React.ChangeEvent<HTMLSelectElement>) => commentFun(event)}>
                                <option selected disabled>Choose SE List :</option>
                        <SelectListFilter />
                    </select> } 
                </globalStateContext.Provider>
            </td>
    )
}
export default FilteredBySEList