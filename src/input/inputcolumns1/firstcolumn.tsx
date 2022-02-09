import React, {FC} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  onChoose: Function;
  listname: string;
  arrayval: string[];
};

const FirstColumn: FC<Props> = ({onChoose, listname, arrayval}) => {
  console.warn(arrayval);
  const arraymap = arrayval.map(element => {
    return {label: element, value: element};
  });
  return (
    <View style={styles.container}>
      <Text style={styles.titleofrow}>Please select a {listname}</Text>
      <RNPickerSelect
        onValueChange={event => onChoose(event)}
        value={arrayval[0]}
        items={arraymap}
        style={pickerSelectStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleofrow: {
    color: '#776677',
  },
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default FirstColumn;
