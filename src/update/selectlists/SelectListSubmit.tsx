import React from 'react';
import {View} from 'react-native';
import {updateFormMobx} from '../../stores/UpdateFormStore';
import InputSelectList from './SelectList';
import {observer} from 'mobx-react';

const InputSelectListSumit = observer(() => {
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
      {updateFormMobx.selectpagetrue && <InputSelectList />}
    </View>
  );
});

export default InputSelectListSumit;
