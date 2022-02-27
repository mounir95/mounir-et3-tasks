import React from 'react';
import {View} from 'react-native';
import {UpdateFormMobx} from '../../constants/UseContext';
import InputText from './TextInput';
import {observer} from 'mobx-react';

const InputTextSumit = observer(() => {
  return (
    <View
      style={{
        width: '90%',
        // height: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'yellow',
        margin: 5
      }}>
      {UpdateFormMobx.textpagetrue && <InputText />}
    </View>
  );
});

export default InputTextSumit;
