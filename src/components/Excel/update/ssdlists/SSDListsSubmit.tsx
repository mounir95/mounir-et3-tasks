import React from 'react';
import {View} from 'react-native';
import getUpdateFormStore from '../../../../stores/UpdateFormStore';
import SSDListInput from './SSDLists';
import {observer} from 'mobx-react';
import {colors, windowWidth} from '../../../../constants/constants';

const SSDListInputSumit = observer(() => {
  return (
    <View
      style={{
        width: windowWidth * 0.9,
        backgroundColor: colors.white,
        borderWidth: windowWidth * 0.002,
        borderColor: colors.yellow,
        margin: windowWidth * 0.0014
      }}>
      {getUpdateFormStore().ssdliststrue.get() && <SSDListInput />}
    </View>
  );
});

export default SSDListInputSumit;
