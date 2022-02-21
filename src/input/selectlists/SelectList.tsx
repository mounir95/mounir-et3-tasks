import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {ObjectArray} from '../../components/ADDPage';
import SelectInput from './SelectInput';

const InputSelectList = () => {
  ObjectArray.Myselist = globalStateContext._currentValue.SEList[0];
  ObjectArray.Myplatform = globalStateContext._currentValue.Platform[0];
  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'se_list') {
      ObjectArray.Myselist = event;
    } else if (parentData === 'platform') {
      ObjectArray.Myplatform = event;
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="firstrow"
          listname={'SE List'}
          arrayval={globalStateContext._currentValue.SEList}
          choosedval={globalStateContext._currentValue.SEList}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'se_list')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="secondrow"
          listname={'Platform'}
          arrayval={globalStateContext._currentValue.Platform}
          choosedval={globalStateContext._currentValue.Platform}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'platform')
          }
        />
      </View>
    </View>
  );
};

export default InputSelectList;
