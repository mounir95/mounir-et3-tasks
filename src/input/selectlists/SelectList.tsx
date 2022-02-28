import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import {globalStateObject} from '../../constant/constants';
import SelectInput from './SelectInput';
import {observer} from 'mobx-react';
import globalObject from '../../stores/GlobalObjectStore';

const InputSelectList = observer(() => {
  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'se_list') {
      globalObject.emptyobject.Myselist = event.toString();
    } else if (parentData === 'platform') {
      globalObject.emptyobject.Myplatform = event.toString();
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="firstrow"
          listname={'SE List'}
          arrayval={globalStateObject.SEList}
          choosedval={globalObject.emptyobject.Myselist}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'se_list')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="secondrow"
          listname={'Platform'}
          arrayval={globalStateObject.Platform}
          choosedval={globalObject.emptyobject.Myplatform}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'platform')
          }
        />
      </View>
    </View>
  );
});

export default InputSelectList;
