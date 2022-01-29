import React, { FC, useState } from "react";
import { globalStateContext } from '../../contants/UseContext';
import { IDarray } from '../../App';
import SelectListFilter from '../components/inputfolder/SelectListFilter'

interface Props{
    FilterValue : Function
}

const ChooseFilter : FC<Props> = ({ FilterValue }) : any => {
    const [ { choosed } , setChoosed ] = useState({
        choosed : true
    })

      const CommentFilter = (event : React.ChangeEvent<HTMLInputElement> ) => {
        setChoosed(val => val = {...val});
        FilterValue(event, 'Comment');
      }

      const OnSelectStataus = (event : React.ChangeEvent<HTMLSelectElement> ) => {
        setChoosed(val => val = {...val});
        FilterValue(event, 'Status');
      }

      const OnSelectSeList = (event : React.ChangeEvent<HTMLSelectElement> ) => {
        FilterValue(event, 'Se_List');
      }

      const OnSelectPlatform = (event : React.ChangeEvent<HTMLSelectElement> ) => {
        FilterValue(event, 'Platform');
    }

    const arrayofids = IDarray._currentValue;
    if( arrayofids[0] === 0){
        arrayofids.shift()
    }
    if( arrayofids.length <= 1 ){
        return (
            <div></div>
        );
    }

    else{
    return (
        <div className='excelsheetcss'>
            <div className="sort_by_comment">
                <label>Sorting By Comment : </label>
                <input 
                    className="input_textfield"
                    type="text"
                    onChange={( event : React.ChangeEvent<HTMLInputElement>) => CommentFilter( event )} />
            </div>
            <table className="all_filters">
                <tr>
                    <td>
                        <globalStateContext.Provider value={globalStateContext._currentValue.Status_list }>
                            <label>Filter By Status : </label>
                            <select
                                onChange={(event : React.ChangeEvent<HTMLSelectElement>) => OnSelectStataus(event)}>
                                <option selected disabled>Choose Status List :</option>
                                <SelectListFilter />
                            </select>
                        </globalStateContext.Provider>
                    </td>
                    <td>
                        <globalStateContext.Provider value ={ globalStateContext._currentValue.SE_list }>
                            <label className="select_selist">Filters By SE List : </label>
                            <select className='option_List_style'
                                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => OnSelectSeList(event)}>
                                <option selected disabled>Choose SE List :</option>
                                <SelectListFilter />
                            </select>
                        </globalStateContext.Provider>
                    </td>
                    <td>
                        <globalStateContext.Provider value={ globalStateContext._currentValue.Platform }>
                            <label >Filter By Platform : </label>
                            <select
                                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => OnSelectPlatform(event)}>
                                <option selected disabled>Choose Platform :</option>
                                <SelectListFilter />
                            </select>
                        </globalStateContext.Provider>
                    </td>
                </tr>
            </table>  
         </div>
    );
    }
}
export default ChooseFilter;