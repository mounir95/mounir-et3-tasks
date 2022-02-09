import React, {ChangeEvent, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {ObjectArray} from '../../../App';
import FirstColumn from './firstcolumn';

const InputRowOne = () => {
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

  ObjectArray.Myse_list = se_list[0];
  ObjectArray.Myplatform = platform[0];

  return (
    <View>
      <View style={styles.rowcolumncontainer}>
        {/* <Text style={styles.titleofrow}> SE List: </Text> */}
        <FirstColumn
          listname={'SE List'}
          arrayval={globalStateContext._currentValue.SE_list}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, se_list)
          }
        />
      </View>
      <View style={styles.rowcolumncontainer}>
        {/* <Text style={styles.titleofrow}> Platform: </Text> */}
        <FirstColumn
          listname={'Platform'}
          arrayval={globalStateContext._currentValue.Platform}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, platform)
          }
        />
      </View>
      <Text>{se_list}</Text>
      <Text>{platform}</Text>
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
