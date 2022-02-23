import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import {globalStateObject} from '../../constants/UseContext';
import SelectInput from './SelectInput';
import {TPrObject} from '../../constants/UseContext';

type Props = {
  newobjectvalue: TPrObject;
};

const InputSelectList: React.FC<Props> = ({newobjectvalue}) => {
  newobjectvalue.Myselist = globalStateObject.SEList[0];
  newobjectvalue.Myplatform = globalStateObject.Platform[0];
  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'se_list') {
      newobjectvalue.Myselist = event.toString();
    } else if (parentData === 'platform') {
      newobjectvalue.Myplatform = event.toString();
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="firstrow"
          listname={'SE List'}
          arrayval={globalStateObject.SEList}
          choosedval={globalStateObject.SEList}
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
          choosedval={globalStateObject.Platform}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'platform')
          }
        />
      </View>
    </View>
  );
};

export default InputSelectList;
