import React from 'react';
import {View} from 'react-native';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import RadioButtonInput from './RadioButtons';
import {observer} from 'mobx-react';
import {windowWidth} from '../../constants/constants';

const RadioButtonInputSumit = observer(() => {
  return (
    <View
      style={{
        width: windowWidth * 0.9,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'yellow',
        margin: 5,
      }}>
      {getUpdateFormStore().radiobuttonstrue.get() && <RadioButtonInput />}
    </View>
  );
});

export default RadioButtonInputSumit;
