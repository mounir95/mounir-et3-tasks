import React from 'react';
import {View} from 'react-native';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import SSDListInput from './SSDLists';
import {observer} from 'mobx-react';

const SSDListInputSumit = observer(() => {
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
      {getUpdateFormStore().ssdliststrue.get() && <SSDListInput />}
    </View>
  );
});

export default SSDListInputSumit;
