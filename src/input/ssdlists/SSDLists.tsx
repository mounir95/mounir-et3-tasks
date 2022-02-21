import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {ObjectArray} from '../../components/ADDPage';
import SelectInput from '../selectlists/SelectInput';

const SSDListInput = () => {
  ObjectArray.Mysize = globalStateContext._currentValue.Size[0].toString();
  ObjectArray.Mydificulity =
    globalStateContext._currentValue.Dificulity[0].toString();
  ObjectArray.Mystatuslist =
    globalStateContext._currentValue.StatusList[0].toString();
  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'size') {
      ObjectArray.Mysize = event;
    } else if (parentData === 'dificulity') {
      ObjectArray.Mydificulity = event;
    } else if (parentData === 'status_list') {
      ObjectArray.Mystatuslist = event;
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Status List'}
          arrayval={globalStateContext._currentValue.StatusList}
          choosedval={globalStateContext._currentValue.StatusList}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'status_list')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Size'}
          arrayval={globalStateContext._currentValue.Size}
          choosedval={globalStateContext._currentValue.Size}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'size')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Dificulity'}
          arrayval={globalStateContext._currentValue.Dificulity}
          choosedval={globalStateContext._currentValue.Dificulity}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'dificulity')
          }
        />
      </View>
    </View>
  );
};

export default SSDListInput;
