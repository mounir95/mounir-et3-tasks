import React, {FC} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Text, View} from 'react-native';
import getLanguageStore from '../../../../stores/LanguageStore';
import {observer} from 'mobx-react';
import {colors, windowWidth} from '../../../../constants/constants';

type Props = {
  onChoose: Function;
  listname: string;
  arrayval: string[];
  choosedval: string;
};

const SelectInput: FC<Props> = observer(
  ({onChoose, listname, arrayval, choosedval}) => {
    let arraymap;
    if (arrayval.length === 0) {
      return null;
    } else {
      arraymap = arrayval.map(element => {
        return {label: element, value: element};
      });
    }
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
              paddingRight: windowWidth * 0.083, // to ensure the text is never behind the icon
            },
            inputAndroid: {
              fontSize: 16,
              paddingHorizontal: windowWidth * 0.03,
              paddingVertical: windowWidth * 0.03,
              borderWidth: windowWidth * 0.0013,
              borderColor: colors.purple,
              borderRadius: windowWidth * 0.022,
              color: colors.black,
              paddingRight: windowWidth * 0.083, // to ensure the text is never behind the icon
            },
          }}
        />
      </View>
    );
  },
);

export default SelectInput;
