import { globalStateContext } from "../../contants/UseContext";
import { ObjectArray } from '../../App';
import { useState } from "react";
import RadioButton from './inputfolder/Radiobutton';

const RadioButtons = () => {
    const [ { reveiwed_by_BY, reveiwed_by_AH, reveiwed_by_HT } , setChanges] = useState( 
        { 
          reveiwed_by_BY : (globalStateContext)._currentValue.Reveiwed_by_BY,
          reveiwed_by_AH : (globalStateContext)._currentValue.Reveiwed_by_AH,
          reveiwed_by_HT : (globalStateContext)._currentValue.Reveiwed_by_HT,
        });

    const changeHandle = ( event : React.ChangeEvent<HTMLInputElement>, attribute : object ) : void => {
        if(Object.keys(attribute).toString() === 'reveiwed_by_BY' ){
           setChanges( val => val = {reveiwed_by_AH: reveiwed_by_AH, reveiwed_by_HT:reveiwed_by_HT, reveiwed_by_BY : event.target.value })
        }
        else if(Object.keys(attribute).toString() === 'reveiwed_by_AH' ){
           setChanges( val => val = { reveiwed_by_HT:reveiwed_by_HT, reveiwed_by_BY :reveiwed_by_BY, reveiwed_by_AH : event.target.value })
        }
        else if(Object.keys(attribute).toString() === 'reveiwed_by_HT' ){
           setChanges( val => val = {reveiwed_by_BY :reveiwed_by_BY, reveiwed_by_AH :reveiwed_by_AH, reveiwed_by_HT : event.target.value })
        }
     }

     ObjectArray.Myreveiwed_by_BY = reveiwed_by_BY;
     ObjectArray.Myreveiwed_by_AH = reveiwed_by_AH;
     ObjectArray.Myreveiwed_by_HT = reveiwed_by_HT;

    return (
        <ul>
            <li className='text_value_radiobutton'>
                    <globalStateContext.Provider value = { reveiwed_by_BY }>
                    <strong>Reveiwed By BH :</strong>
                    <RadioButton choosebutton = {(event : React.ChangeEvent<HTMLInputElement>) => changeHandle( event , { reveiwed_by_BY } )}/>
                    </globalStateContext.Provider>
            </li>
            <li className='text_value_radiobutton'>
                    <globalStateContext.Provider value = { reveiwed_by_AH }>
                    <strong>Reveiwed By AH :</strong>
                    <RadioButton choosebutton = {(event : React.ChangeEvent<HTMLInputElement>) => changeHandle( event, { reveiwed_by_AH } )}/>
                    </globalStateContext.Provider>
            </li>
            <li className='text_value_radiobutton'>
                    <globalStateContext.Provider value = { reveiwed_by_HT }>
                    <strong>Reveiwed By HT :</strong>
                    <RadioButton choosebutton = {(event :React.ChangeEvent<HTMLInputElement> ) => changeHandle( event, { reveiwed_by_HT } )}/>
                    </globalStateContext.Provider>
            </li>
        </ul>
    )
}
export default RadioButtons