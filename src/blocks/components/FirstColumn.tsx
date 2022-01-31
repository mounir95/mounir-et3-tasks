import { globalStateContext } from '../../contants/UseContext';
import { useState } from 'react';
import { ObjectArray } from '../../App';
import TextInput from './inputfolder/Textinput';
import SelectList from './inputfolder/SelectList';

const FirstColumn = () => {
    const [ { se_list, platform, release_version } , setChanges] = useState( 
        { 
          se_list : (globalStateContext)._currentValue.SE_list,
          platform : (globalStateContext)._currentValue.Platform,
          release_version : (globalStateContext)._currentValue.Release_Version,
    });

    const onInputchange = (event : React.ChangeEvent<HTMLSelectElement>, Atribuite :string) : void => {
        if ( Atribuite === release_version ){
          setChanges(val => val = { se_list : se_list, platform : platform, release_version : event.target.value });
        }
      };
    
      const outputEvent = (event : React.ChangeEvent<HTMLSelectElement>, parentData : string) : void =>{
        if( parentData === se_list ){
          setChanges( val => val = { platform : platform, release_version : release_version, se_list : [ event.target.value ] });
        }
        else if(parentData === platform){
          setChanges(val => val = { se_list : se_list, release_version : release_version, platform : [ event.target.value ] });
        }
    }

    ObjectArray.Myse_list = se_list[0];
    ObjectArray.Myplatform = platform[0];
    ObjectArray.Myrelease_version = release_version;
    
    return(
        <ul>
            <li className='listinputs' >
                        <globalStateContext.Provider value ={ globalStateContext._currentValue.SE_list }>
                        <div className='listrows'>
                            <label className="text_field_class"> SE List : </label> 
                            <select className='option_List_style' defaultValue='AH' onChange={(event: React.ChangeEvent<HTMLSelectElement>) => outputEvent(event,se_list)}>
                            <SelectList />
                            </select>
                        </div>
                        </globalStateContext.Provider>
            </li>
            <li className='listinputs' >
                    <globalStateContext.Provider value={ globalStateContext._currentValue.Platform }>
                        <div className='listrows'>
                            <label className="text_field_class"> Platform : </label> 
                            <select className='option_List_style' onChange={(event: React.ChangeEvent<HTMLSelectElement>) => outputEvent(event,platform)}>
                            <SelectList />
                            </select>
                        </div>
                    </globalStateContext.Provider>
            </li>

            <li className='listinputs' >
                    <globalStateContext.Provider value={ release_version }>
                        <div className='listrows'>
                            <label className="text_field_class"> Release Version : </label> 
                            <TextInput inputHandeler = {(inputval: React.ChangeEvent<HTMLSelectElement>) => onInputchange( inputval, release_version)} />
                        </div>
                    </globalStateContext.Provider>
            </li>
            </ul>
    )
}
export default FirstColumn;