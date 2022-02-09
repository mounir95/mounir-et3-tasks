import React, {FC} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  onChoose: Function,
  mytest: string,
};

const FirstColumn: FC<Props> = ({onChoose, mytest}) => {
  const arraydata = ['BY', 'AH', 'HT'];
  const arraymap = arraydata.map(element => {
    return {label: element, value: element};
  });
  const listname = 'se_List';
  console.warn(mytest)
  return (
    <View style={styles.container}>
      <Text>Please select a {listname}</Text>
      <Text>Please select a {mytest}</Text>
      <RNPickerSelect
        onValueChange={event => onChoose(event)}
        value={arraydata[0]}
        items={arraymap}
        style={pickerSelectStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
