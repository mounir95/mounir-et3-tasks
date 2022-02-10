import React, {FC, ChangeEvent} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {useState} from 'react';
import {ObjectArray} from '../../../App';
import FirstColumn from '../inputcolumns1/selectinput';

type Props = {
  nextfase3: Function;
};
const InputRowThree: FC<Props> = ({nextfase3}) => {
  const [{size, dificulity, status_list}, setChanges] = useState({
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
    nextfase3();
  };;
  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <FirstColumn
          listname={'Status List'}
          arrayval={globalStateContext._currentValue.Status_list}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, status_list)
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <FirstColumn
          listname={'Size'}
          arrayval={globalStateContext._currentValue.Size}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, size)
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <FirstColumn
          listname={'Dificulity'}
          arrayval={globalStateContext._currentValue.Dificulity}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, dificulity)
          }
        />
      </View>
      <Button title={'Next'} onPress={() => handlePressSubmitButton()} />
    </View>
  );
};

export default InputRowThree;
