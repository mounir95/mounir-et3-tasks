import React from 'react';
import {View} from 'react-native';
import {updateFormMobx} from '../../stores/UpdateFormStore';
import RadioButtonInput from './RadioButtons';
import {observer} from 'mobx-react';

const RadioButtonInputSumit = observer(() => {
  return (
    <View
      style={{
        width: '90%',
        // height: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'yellow',
        margin: 5,
      }}>
      {updateFormMobx.radiobuttonstrue && <RadioButtonInput />}
    </View>
  );
});

export default RadioButtonInputSumit;
