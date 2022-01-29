import React, { FC, useState } from "react";
import { ObjectArray } from "../../App";

interface Props{
    SubmitingChanges : Function
}

const ChooseDateSort : FC<Props> = ({ SubmitingChanges }) => {
    const [ { sortdate, sortdate2 } , changeState ] = useState({
        sortdate : 'Asc',
        sortdate2 : 'Desc',
      });

    const OnSelectDate = (event : React.ChangeEvent<HTMLSelectElement> ) => {
        if( event.target.value === 'Asc'){
          ObjectArray._currentValue =  ObjectArray._currentValue.sort((a : any, b : any) => { 
            return a.Mydate - b.Mydate;});
        }
        else{
          ObjectArray._currentValue =  ObjectArray._currentValue.sort((a : any, b : any) => { 
            return b.Mydate - a.Mydate;});
        }
        SubmitingChanges();
      }
    
    return (
        <div className='div_textalign_left'>
            <label>Sorting By Date : </label>
            <select className='option_sort' 
            onChange={(event : React.ChangeEvent<HTMLSelectElement>) => OnSelectDate(event)}>
            <option selected disabled>Choose one :</option>
            <option value={ sortdate } key={ sortdate }>{ sortdate }</option>
            <option value={ sortdate2 } key={ sortdate2 }>{ sortdate2 }</option>
            </select>
        </div>
    );
}
export default ChooseDateSort;