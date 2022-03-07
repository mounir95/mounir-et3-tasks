import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import SelectInput from './SelectInput';
import {observer} from 'mobx-react';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';
import getLanguageStore from '../../stores/LanguageStore';

const InputSelectList = observer(() => {
  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="firstrow"
          listname={getLanguageStore().translatedlang.get().setext}
          arrayval={
            getLanguageStore().translatedlang.get().globalStateObject.SEList
          }
          choosedval={getGlobalObjectStore().emptyobject.get().Myselist}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            (getGlobalObjectStore().emptyobject.get().Myselist =
              event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="secondrow"
          listname={getLanguageStore().translatedlang.get().platformtext}
          arrayval={
            getLanguageStore().translatedlang.get().globalStateObject.Platform
          }
          choosedval={getGlobalObjectStore().emptyobject.get().Myplatform}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            (getGlobalObjectStore().emptyobject.get().Myplatform =
              event.toString())
          }
        />
      </View>
    </View>
  );
});

export default InputSelectList;
