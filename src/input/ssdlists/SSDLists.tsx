import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';
import SelectInput from '../selectlists/SelectInput';
import {observer} from 'mobx-react';
import getLanguageStore, {globalStateObject} from '../../stores/LanguageStore';

const SSDListInput = observer(() => {
  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={getLanguageStore.get('statustext')}
          arrayval={globalStateObject.StatusList}
          choosedval={getGlobalObjectStore().emptyobject.get().Mystatuslist}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            (getGlobalObjectStore().emptyobject.get().Mystatuslist =
              event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={getLanguageStore.get('sizetext')}
          arrayval={globalStateObject.Size}
          choosedval={getGlobalObjectStore().emptyobject.get().Mysize}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            (getGlobalObjectStore().emptyobject.get().Mysize = event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={getLanguageStore.get('dificulitytex')}
          arrayval={globalStateObject.Dificulity}
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
