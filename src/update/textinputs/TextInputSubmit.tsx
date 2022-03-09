import React from 'react';
import {View} from 'react-native';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import InputText from './TextInput';
import {observer} from 'mobx-react';
import {windowWidth} from '../../constants/constants';

const InputTextSumit = observer(() => {
  return (
    <View
      style={{
        width: windowWidth * 0.9,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'yellow',
        margin: 5
      }}>
      {getUpdateFormStore().textpagetrue.get() && <InputText />}
    </View>
  );
});

export default InputTextSumit;
