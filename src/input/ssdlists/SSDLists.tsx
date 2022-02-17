import React, { FC, ChangeEvent } from 'react';
import { View, Button } from 'react-native';
import { globalStateContext } from '../../constants/UseContext';
import { useState } from 'react';
import { ObjectArray } from '../../App';
import SelectInput from '../selectlists/SelectInput';

type Props = {
  SSDLists: Function;
};
const SSDListInput: FC<Props> = ({ SSDLists }) => {
  const [{ size, dificulity, status_list }, setChanges] = useState({
    size: globalStateContext._currentValue.Size,
    dificulity: globalStateContext._currentValue.Dificulity,
    status_list: globalStateContext._currentValue.Status_list,
  });

  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === size) {
      setChanges(
        val =>
        (val = {
          dificulity: dificulity,
          status_list: status_list,
          size: [event],
        }),
      );
    } else if (parentData === dificulity) {
      setChanges(
        val =>
        (val = {
          size: size,
          status_list: status_list,
          dificulity: [event],
        }),
      );
    } else if (parentData === status_list) {
      setChanges(
        val =>
        (val = {
          size: size,
          dificulity: dificulity,
          status_list: [event],
        }),
      );
    }
  };

  const handlePressSubmitButton = () => {
    ObjectArray.Mystatus_list = status_list[0];
    ObjectArray.Mysize = size[0];
    ObjectArray.Mydificulity = dificulity[0];
    SSDLists();
  };;
  return (
    <View>
      <View style={{ marginBottom: 20, marginTop: 10 }}>
        <SelectInput
          listname={'Status List'}
          arrayval={globalStateContext._currentValue.Status_list}
          choosedval={status_list}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, status_list)
          }
        />
      </View>
      <View style={{ marginBottom: 20, marginTop: 10 }}>
        <SelectInput
          listname={'Size'}
          arrayval={globalStateContext._currentValue.Size}
          choosedval={size}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, size)
          }
        />
      </View>
      <View style={{ marginBottom: 20, marginTop: 10 }}>
        <SelectInput
          listname={'Dificulity'}
          arrayval={globalStateContext._currentValue.Dificulity}
          choosedval={dificulity}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, dificulity)
          }
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <Button title={'Next'} onPress={() => handlePressSubmitButton()} />
      </View>
    </View>
  );
};

export default SSDListInput;
