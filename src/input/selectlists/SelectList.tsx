import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import {globalStateObject} from '../../constants/UseContext';
import SelectInput from './SelectInput';
import {observer} from 'mobx-react';
import globalObj from '../../constants/ObjectStore';

const InputSelectList = observer(() => {
  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'se_list') {
      globalObj.emptyobject.Myselist = event.toString();
    } else if (parentData === 'platform') {
      globalObj.emptyobject.Myplatform = event.toString();
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="firstrow"
          listname={'SE List'}
          arrayval={globalStateObject.SEList}
          choosedval={globalObj.emptyobject.Myselist}
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
          choosedval={globalObj.emptyobject.Myplatform}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'platform')
          }
        />
      </View>
    </View>
  );
});

export default InputSelectList;
