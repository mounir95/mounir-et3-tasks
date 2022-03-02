import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';
import {globalStateObject} from '../../constant/constants';
import SelectInput from '../selectlists/SelectInput';
import {observer} from 'mobx-react';

const SSDListInput = observer(() => {
  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'size') {
      getGlobalObjectStore().emptyobject.get().Mysize = event.toString();
    } else if (parentData === 'dificulity') {
      getGlobalObjectStore().emptyobject.get().Mydificulity = event.toString();
    } else if (parentData === 'status_list') {
      getGlobalObjectStore().emptyobject.get().Mystatuslist = event.toString();
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Status List'}
          arrayval={globalStateObject.StatusList}
          choosedval={getGlobalObjectStore().emptyobject.get().Mystatuslist}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'status_list')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Size'}
          arrayval={globalStateObject.Size}
          choosedval={getGlobalObjectStore().emptyobject.get().Mysize}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'size')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Dificulity'}
          arrayval={globalStateObject.Dificulity}
          choosedval={getGlobalObjectStore().emptyobject.get().Mydificulity}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'dificulity')
          }
        />
      </View>
    </View>
  );
});

export default SSDListInput;
