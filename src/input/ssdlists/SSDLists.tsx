import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';
import SelectInput from '../selectlists/SelectInput';
import {observer} from 'mobx-react';
import getLanguageStore from '../../stores/LanguageStore';

const SSDListInput = observer(() => {
  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={getLanguageStore().translatedlang.get().statustext}
          arrayval={
            getLanguageStore().translatedlang.get().globalStateObject.StatusList
          }
          choosedval={getGlobalObjectStore().emptyobject.get().Mystatuslist}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            (getGlobalObjectStore().emptyobject.get().Mystatuslist =
              event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={getLanguageStore().translatedlang.get().sizetext}
          arrayval={
            getLanguageStore().translatedlang.get().globalStateObject.Size
          }
          choosedval={getGlobalObjectStore().emptyobject.get().Mysize}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            (getGlobalObjectStore().emptyobject.get().Mysize = event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={getLanguageStore().translatedlang.get().dificulitytext}
          arrayval={
            getLanguageStore().translatedlang.get().globalStateObject.Dificulity
          }
          choosedval={getGlobalObjectStore().emptyobject.get().Mydificulity}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            (getGlobalObjectStore().emptyobject.get().Mydificulity =
              event.toString())
          }
        />
      </View>
    </View>
  );
});

export default SSDListInput;
