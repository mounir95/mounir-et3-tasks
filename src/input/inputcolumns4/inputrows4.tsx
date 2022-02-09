import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {ObjectArray} from '../../../App';
import {useState} from 'react';
import RadioButtonRow from './radiobuttonrow';

const InputRowFour = () => {
  const [{reveiwed_by_BY, reveiwed_by_AH, reveiwed_by_HT}, setChanges] =
    useState({
      reveiwed_by_BY: globalStateContext._currentValue.Reveiwed_by_BY,
      reveiwed_by_AH: globalStateContext._currentValue.Reveiwed_by_AH,
      reveiwed_by_HT: globalStateContext._currentValue.Reveiwed_by_HT,
    });

  const changeHandle = (
    booleanstring: React.ChangeEvent<HTMLInputElement>,
    attribute: string,
  ): void => {
    if (attribute === 'reveiwed_by_BY') {
      setChanges(
        val =>
          (val = {
            reveiwed_by_AH: reveiwed_by_AH,
            reveiwed_by_HT: reveiwed_by_HT,
            reveiwed_by_BY: booleanstring,
          }),
      );
    } else if (attribute === 'reveiwed_by_AH') {
      setChanges(
        val =>
          (val = {
            reveiwed_by_HT: reveiwed_by_HT,
            reveiwed_by_BY: reveiwed_by_BY,
            reveiwed_by_AH: booleanstring,
          }),
      );
    } else if (attribute === 'reveiwed_by_HT') {
      setChanges(
        val =>
          (val = {
            reveiwed_by_BY: reveiwed_by_BY,
            reveiwed_by_AH: reveiwed_by_AH,
            reveiwed_by_HT: booleanstring,
          }),
      );
    }
  };

  ObjectArray.Myreveiwed_by_BY = reveiwed_by_BY;
  ObjectArray.Myreveiwed_by_AH = reveiwed_by_AH;
  ObjectArray.Myreveiwed_by_HT = reveiwed_by_HT;

  const booleanval = [
    {
      key: 'yes',
      text: 'yes',
    },
    {
      key: 'no',
      text: 'no',
    },
  ];

  return (
    <View style={styles.Radiobutton}>
      <View style={styles.rbWrapper}>
        <Text style={styles.textcomment}>BY Approve:</Text>
        <RadioButtonRow
          getboolean={booleanval}
          radiobuttonfun={(
            booleanstring: React.ChangeEvent<HTMLInputElement>,
          ) => changeHandle(booleanstring, 'reveiwed_by_BY')}
          value={reveiwed_by_BY}
        />
      </View>
      <View style={styles.rbWrapper}>
        <Text style={styles.textcomment}>AH Approve:</Text>
        <RadioButtonRow
          getboolean={booleanval}
          radiobuttonfun={(
            booleanstring: React.ChangeEvent<HTMLInputElement>,
          ) => changeHandle(booleanstring, 'reveiwed_by_AH')}
          value={reveiwed_by_AH}
        />
      </View>
      <View style={styles.rbWrapper}>
        <Text style={styles.textcomment}>HT Approve:</Text>
        <RadioButtonRow
          getboolean={booleanval}
          radiobuttonfun={(
            booleanstring: React.ChangeEvent<HTMLInputElement>,
          ) => changeHandle(booleanstring, 'reveiwed_by_HT')}
          value={reveiwed_by_HT}
        />
      </View>
      <Text>{reveiwed_by_BY}</Text>
      <Text>{reveiwed_by_AH}</Text>
      <Text>{reveiwed_by_HT}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Radiobutton: {
    flex: 1,
    flexDirection: 'row',
    // width: 'width'
  },
  rbWrapper: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 2,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  textcomment: {
    fontSize: 15,
    fontWeight: '700',
  },
});
export default InputRowFour;
