import React, {ChangeEvent, FC} from 'react';
import {View, Button} from 'react-native';
import {globalStateContext, TPrObject} from '../../constants/UseContext';
import {ObjectArray} from '../../components/ADDPage';
import SelectInput from './SelectInput';
import filter from 'lodash/filter';

type Props = {
  updatedid: number;
  SelectList: Function;
};

const InputSelectList: FC<Props> = ({updatedid, SelectList}) => {
  const updatedarray: TPrObject = filter(
    ObjectArray._currentValue,
    (c: TPrObject) => {
      if (c.Myid === updatedid) {
        return c;
      }
    },
  )[0];

  ObjectArray.Myselist = updatedarray.Myselist;
  ObjectArray.Myplatform = updatedarray.Myplatform;

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

  const handlePressSubmitButton = () => {
    SelectList();
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="firstrow"
          listname={'SE List'}
          arrayval={globalStateContext._currentValue.SEList}
          choosedval={updatedarray.Myselist}
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
          choosedval={updatedarray.Myplatform}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'platform')
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button title={'Next'} onPress={() => handlePressSubmitButton()} />
      </View>
    </View>
  );
};

export default InputSelectList;
