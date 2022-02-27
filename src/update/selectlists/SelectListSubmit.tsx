import React from 'react';
import {View} from 'react-native';
import {UpdateFormMobx} from '../../constants/UseContext';
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
      {UpdateFormMobx.selectpagetrue && <InputSelectList />}
    </View>
  );
});

export default InputSelectListSumit;
