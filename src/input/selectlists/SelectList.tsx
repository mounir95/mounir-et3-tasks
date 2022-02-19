import React, {ChangeEvent, useState} from 'react';
import {View} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {ObjectArray} from '../../components/ADDPage';
import SelectInput from './SelectInput';

const InputSelectList = () => {
  const [{se_list, platform}, setChanges] = useState({
    se_list: globalStateContext._currentValue.SEList,
    platform: globalStateContext._currentValue.Platform,
  });

  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === se_list) {
      setChanges(
        val =>
          (val = {
            platform: platform,
            se_list: [event],
          }),
      );
    } else if (parentData === platform) {
      setChanges(
        val =>
          (val = {
            se_list: se_list,
            platform: [event],
          }),
      );
    }
  };

    ObjectArray.Myselist = se_list[0];
    ObjectArray.Myplatform = platform[0];

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="firstrow"
          listname={'SE List'}
          arrayval={globalStateContext._currentValue.SEList}
          choosedval={se_list}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, se_list)
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="secondrow"
          listname={'Platform'}
          arrayval={globalStateContext._currentValue.Platform}
          choosedval={platform}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, platform)
          }
        />
      </View>
    </View>
  );
};

export default InputSelectList;
