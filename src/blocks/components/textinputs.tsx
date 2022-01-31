import { globalStateContext } from '../../contants/UseContext';
import { useState } from 'react';
import { ObjectArray } from '../../App';
import TextInput from './inputfolder/Textinput';

const TextInputs = () => {
    const [ { comment, pr_Link } , setChanges] = useState( 
        {
          comment : (globalStateContext)._currentValue.Comment,
          pr_Link: (globalStateContext)._currentValue.Pr_Link,
    });
    
    const onInputchange = (event : React.ChangeEvent<HTMLSelectElement>, Atribuite :string) : void => {
        if( Atribuite === comment ){
            setChanges(val => val = { pr_Link:pr_Link , comment : event.target.value });
        }
        else if ( Atribuite === pr_Link ){
            setChanges(val => val = { comment: comment, pr_Link : event.target.value });
        }
    };

    ObjectArray.Mypr_Link = pr_Link;
    ObjectArray.Mycomment = comment;

    return (
        <ul>
            <li className='listinputs' >
                    <globalStateContext.Provider value={ comment }>
                        <div className='listrows'> 
                            <label className="text_field_class"> Comment : </label> 
                            <TextInput inputHandeler = {(inputval : React.ChangeEvent<HTMLSelectElement>) => onInputchange( inputval, comment )} />
                        </div>
                    </globalStateContext.Provider>

            </li>
            <li className='listinputs' >
                    <globalStateContext.Provider value={ pr_Link }>
                        <div className='listrows'>
                            <label className="text_field_class"> Pr Link : </label> 
                            <TextInput inputHandeler = {(inputval : React.ChangeEvent<HTMLSelectElement>) => onInputchange( inputval, pr_Link)} />
                        </div>
                    </globalStateContext.Provider>
            </li>
        </ul>
    )
}
export default TextInputs;