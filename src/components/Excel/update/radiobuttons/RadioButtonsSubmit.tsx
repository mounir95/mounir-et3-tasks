import React from 'react';
import {View} from 'react-native';
import getUpdateFormStore from '../../../../stores/UpdateFormStore';
import RadioButtonInput from './RadioButtons';
import {observer} from 'mobx-react';
import {colors, windowWidth} from '../../../../constants/constants';

const RadioButtonInputSumit = observer(() => {
  return (
    <View
      style={{
        width: windowWidth * 0.9,
        backgroundColor: colors.white,
        borderWidth: windowWidth * 0.002,
        borderColor: colors.yellow,
        margin: windowWidth * 0.013,
      }}>
      {getUpdateFormStore().radiobuttonstrue.get() && <RadioButtonInput />}
    </View>
  );
});

export default RadioButtonInputSumit;
