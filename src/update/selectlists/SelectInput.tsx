import React, {FC} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Text, View} from 'react-native';
import getLanguageStore from '../../stores/LanguageStore';

type Props = {
  onChoose: Function;
  listname: string;
  arrayval: string[];
  choosedval: string;
};

const SelectInput: FC<Props> = ({onChoose, listname, arrayval, choosedval}) => {
  const arraymap = arrayval.map(element => {
    return {label: element, value: element};
  });
  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#776677'}}>
        {getLanguageStore().translatedlang.get().pleaseselect}
        {listname}
      </Text>
      <RNPickerSelect
        onValueChange={event => onChoose(event)}
        value={choosedval}
        items={arraymap}
        style={{
          inputIOS: {
            fontSize: 16,
            paddingVertical: 10,
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
            paddingVertical: 10,
            borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          },
        }}
      />
    </View>
  );
};

export default SelectInput;
