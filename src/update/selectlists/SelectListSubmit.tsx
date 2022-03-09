import React from 'react';
import {View} from 'react-native';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import InputSelectList from './SelectList';
import {observer} from 'mobx-react';
import {windowWidth} from '../../constants/constants';

const InputSelectListSumit = observer(() => {
  return (
    <View
      style={{
        width: windowWidth * 0.9,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'yellow',
        margin: 5
      }}>
      {getUpdateFormStore().selectpagetrue.get() && <InputSelectList />}
    </View>
  );
});

export default InputSelectListSumit;
