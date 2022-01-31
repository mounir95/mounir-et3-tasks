import { globalStateContext } from '../../contants/UseContext';
import { useState } from 'react';
import { ObjectArray } from '../../App';
import SelectList from './inputfolder/SelectList';

const SelectLists = () => {
    const [ { size, dificulity, status_list } , setChanges] = useState( 
        { 
          size : (globalStateContext)._currentValue.Size,
          dificulity : (globalStateContext)._currentValue.Dificulity,
          status_list : (globalStateContext)._currentValue.Status_list,
        });
    
    const changeList = (event : React.ChangeEvent<HTMLSelectElement>) : void => {
        setChanges(val => val = {...val, status_list : [ event.target.value ] })
    }

    const outputEvent = (event : React.ChangeEvent<HTMLSelectElement>, parentData : string) : void =>{
        if( parentData === size){
            setChanges( val => val = { ...val, size : [ event.target.value ] });
        }
        else if(parentData === dificulity){
          setChanges(val => val = { ...val, dificulity : [ event.target.value ] });
        }
    }

    ObjectArray.Mystatus_list = status_list[0];
    ObjectArray.Mysize = size[0];
    ObjectArray.Mydificulity = dificulity[0];
    
    return (
        <ul>
            <li className='listinputs' >
                    <globalStateContext.Provider value={ globalStateContext._currentValue.Size }>
                        <div className='listrows'>
                            <label className="text_field_class"> Size : </label> 
                            <select className='option_List_style' onChange={(event : React.ChangeEvent<HTMLSelectElement>) => outputEvent(event,size)}>
                            <SelectList />
                            </select>
                        </div>
                    </globalStateContext.Provider>
            </li>
            <li className='listinputs' >
                    <globalStateContext.Provider value={ globalStateContext._currentValue.Dificulity }>
                        <div className='listrows'>
                            <label className="text_field_class"> Dificulity : </label> 
                            <select className='option_List_style' onChange={(tagname :React.ChangeEvent<HTMLSelectElement>) => outputEvent( tagname, dificulity)}>
                            <SelectList />
                            </select>
                        </div>
                    </globalStateContext.Provider>
            </li>
            <li className='listinputs' >
                    <globalStateContext.Provider value={ globalStateContext._currentValue.Status_list }>
                        <div className='listrows'>
                            <label className="text_field_class"> Status List : </label> 
                    <select className='option_List_style' onChange={(event : React.ChangeEvent<HTMLSelectElement>) => changeList(event)}>
                        <SelectList />
                        </select>
                        </div>
                    </globalStateContext.Provider>
            </li>
        </ul>
    )
}
export default SelectLists;