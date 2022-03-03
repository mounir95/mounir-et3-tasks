import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';
import {globalStateObject} from '../../constant/constants';
import SelectInput from '../selectlists/SelectInput';
import {observer} from 'mobx-react';

const SSDListInput = observer(() => {
  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Status List'}
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
          listname={'Size'}
          arrayval={globalStateObject.Size}
          choosedval={getGlobalObjectStore().emptyobject.get().Mysize}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            (getGlobalObjectStore().emptyobject.get().Mysize = event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Dificulity'}
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
