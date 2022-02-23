import React, {ChangeEvent, FC} from 'react';
import {View, Button} from 'react-native';
import {globalStateObject, TPrObject} from '../../constants/UseContext';
import SelectInput from './SelectInput';
import filter from 'lodash/filter';
import {Context} from 'vm';

type Props = {
  updatedid: number;
  SelectList: Function;
  objectval: TPrObject;
  arrayobjectval: Context;
};

const InputSelectList: FC<Props> = ({
  updatedid,
  SelectList,
  objectval,
  arrayobjectval,
}) => {
  const updatedarray: TPrObject = filter(arrayobjectval, (c: TPrObject) => {
    if (c.Myid === updatedid) {
      return c;
    }
  })[0];

  objectval.Myselist = updatedarray.Myselist;
  objectval.Myplatform = updatedarray.Myplatform;

  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'se_list') {
      objectval.Myselist = event.toString();
    } else if (parentData === 'platform') {
      objectval.Myplatform = event.toString();
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
          arrayval={globalStateObject.SEList}
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
          arrayval={globalStateObject.Platform}
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
