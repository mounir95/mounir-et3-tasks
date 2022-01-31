import React, { FC, useState } from "react";
import { ObjectArray } from '../../App';
import FilteredByComment from './FilterFun/FilteredByComment';
import FilteredByStatus from './FilterFun/FilteredByStatus';
import FilteredByPlatfrom from './FilterFun/FilteredByPlatfrom';
import FilteredBySEList from './FilterFun/FilteredBySEList';

interface Props{
    filterValue : Function
}

const ChooseFilter : FC<Props> = ({ filterValue }) : any => {
    const [ { c_refresh, s_refresh, se_refresh, p_refresh }, setChoosed ] = useState({
        c_refresh : true,
        s_refresh : true,
        se_refresh : true,
        p_refresh : true

    })

      const CommentFilter = (event : React.ChangeEvent<HTMLInputElement> ) => {
        filterValue(event, 'Comment');
        setChoosed({ c_refresh:c_refresh, s_refresh : !s_refresh, se_refresh : !se_refresh, p_refresh: !p_refresh });
      }

      const OnSelectStataus = (event : React.ChangeEvent<HTMLSelectElement> ) => {
        filterValue(event, 'Status');
        setChoosed({ s_refresh : s_refresh, c_refresh : !c_refresh, se_refresh : !se_refresh, p_refresh: !p_refresh });
      }

      const OnSelectSeList = (event : React.ChangeEvent<HTMLSelectElement> ) => {
        filterValue(event, 'Se_List');
        setChoosed({ se_refresh: se_refresh, s_refresh : !s_refresh, c_refresh : !c_refresh, p_refresh: !p_refresh });
      }

      const OnSelectPlatform = (event : React.ChangeEvent<HTMLSelectElement> ) => {
        filterValue(event, 'Platform');
        setChoosed({ p_refresh:p_refresh , s_refresh : !s_refresh, se_refresh : !se_refresh, c_refresh: !c_refresh });
      }

    const arrayofids = ObjectArray._currentValue;
    if( arrayofids.length <= 2 ){
        return (
            <div></div>
        );
    }

    else{
    return (
        <div className='excelsheetcss'>
            <FilteredByComment setrefresh = {c_refresh} commentFun={(event : React.ChangeEvent<HTMLInputElement>) => CommentFilter(event)} />
            <table className="all_filters">
                <tr>
                <FilteredByStatus setrefresh = {s_refresh} commentFun={(event : React.ChangeEvent<HTMLSelectElement>) => OnSelectStataus(event)} />
                <FilteredByPlatfrom setrefresh = {p_refresh} commentFun={(event : React.ChangeEvent<HTMLSelectElement>) => OnSelectPlatform(event)} />
                <FilteredBySEList setrefresh = {se_refresh} commentFun={(event : React.ChangeEvent<HTMLSelectElement>) => OnSelectSeList(event)} />                    
                </tr>
            </table>
      </div>
    );
    }
}
export default ChooseFilter;