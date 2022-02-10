import React, {ChangeEvent, FC, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {ObjectArray} from '../../../App';
import FirstColumn from './selectinput';

type Props = {
  nextfase1: Function,
};

const InputRowOne: FC<Props> = ({nextfase1}) => {
  const [{se_list, platform}, setChanges] = useState({
    se_list: globalStateContext._currentValue.SE_list,
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

  const handlePressSubmitButton = () => {
    ObjectArray.Myse_list = se_list[0];
    ObjectArray.Myplatform = platform[0];
    nextfase1();
  }

  return (
    <View>
      <View style={styles.rowcolumncontainer}>
        <FirstColumn
          listname={'SE List'}
          arrayval={globalStateContext._currentValue.SE_list}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, se_list)
          }
        />
      </View>
      <View style={styles.rowcolumncontainer}>
        <FirstColumn
          listname={'Platform'}
          arrayval={globalStateContext._currentValue.Platform}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, platform)
          }
        />
      </View>
      <Button title={'Next'} onPress={() => handlePressSubmitButton()} />
    </View>
  );
};
const styles = StyleSheet.create({
  rowcolumncontainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  titleofrow: {
    color: '#776677',
  }
})
export default InputRowOne;
