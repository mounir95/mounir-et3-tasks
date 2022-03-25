import React, {FC} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Text, View} from 'react-native';
import getLanguageStore from '../../../../stores/LanguageStore';
import {colors, windowWidth} from '../../../../constants/constants';

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
        backgroundColor: colors.fff,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: colors.lightpurple}}>
        {getLanguageStore.get('pleaseselect')}
        {listname}
      </Text>
      <RNPickerSelect
        onValueChange={event => onChoose(event)}
        value={choosedval}
        items={arraymap}
        style={{
          inputIOS: {
            fontSize: 16,
            paddingVertical: windowWidth * 0.03,
            paddingHorizontal: windowWidth * 0.03,
            borderWidth: windowWidth * 0.002,
            borderColor: colors.gray,
            borderRadius: windowWidth * 0.011,
            color: colors.black,
            paddingRight: windowWidth * 0.083,
          },
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: windowWidth * 0.03,
            paddingVertical: windowWidth * 0.03,
            borderWidth: windowWidth * 0.0013,
            borderColor: colors.purple,
            borderRadius: windowWidth * 0.022,
            color: colors.black,
            paddingRight: windowWidth * 0.083,
          },
        }}
      />
    </View>
  );
};

export default SelectInput;
