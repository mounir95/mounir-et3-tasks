import React, {FC, ChangeEvent} from 'react';
import {View, Button} from 'react-native';
import {globalStateContext, TPrObject} from '../../constants/UseContext';
import {ObjectArray} from '../../components/ADDPage';
import SelectInput from '../selectlists/SelectInput';
import filter from 'lodash/filter';

type Props = {
  updatedid: number;
  SSDLists: Function;
};
const SSDListInput: FC<Props> = ({updatedid, SSDLists}) => {
  const updatedarray: TPrObject = filter(
    ObjectArray._currentValue,
    (c: TPrObject) => {
      if (c.Myid === updatedid) {
        return c;
      }
    },
  )[0];

  ObjectArray.Mysize = updatedarray.Mysize;
  ObjectArray.Mydificulity = updatedarray.Mydificulity;
  ObjectArray.Mystatuslist = updatedarray.Mystatuslist;

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

  const handlePressSubmitButton = () => {
    SSDLists();
  };
  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Status List'}
          arrayval={globalStateContext._currentValue.StatusList}
          choosedval={updatedarray.Mystatuslist}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'status_list')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Size'}
          arrayval={globalStateContext._currentValue.Size}
          choosedval={updatedarray.Mysize}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'size')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Dificulity'}
          arrayval={globalStateContext._currentValue.Dificulity}
          choosedval={updatedarray.Mydificulity}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'dificulity')
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button title={'Next'} onPress={() => handlePressSubmitButton()} />
      </View>
    </View>
  );
};

export default SSDListInput;
