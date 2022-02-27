import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import globalObj from '../../constants/ObjectStore';
import {globalStateObject} from '../../constants/UseContext';
import SelectInput from '../selectlists/SelectInput';
import {observer} from 'mobx-react';

const SSDListInput = observer(() => {
  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'size') {
      globalObj.emptyobject.Mysize = event.toString();
    } else if (parentData === 'dificulity') {
      globalObj.emptyobject.Mydificulity = event.toString();
    } else if (parentData === 'status_list') {
      globalObj.emptyobject.Mystatuslist = event.toString();
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Status List'}
          arrayval={globalStateObject.StatusList}
          choosedval={globalObj.emptyobject.Mystatuslist}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'status_list')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Size'}
          arrayval={globalStateObject.Size}
          choosedval={globalObj.emptyobject.Mysize}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'size')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Dificulity'}
          arrayval={globalStateObject.Dificulity}
          choosedval={globalObj.emptyobject.Mydificulity}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'dificulity')
          }
        />
      </View>
    </View>
  );
});

export default SSDListInput;
