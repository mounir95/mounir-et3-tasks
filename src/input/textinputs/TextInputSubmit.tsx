import React, {FC} from 'react';
import {View} from 'react-native';
import InputText from './TextInput';

type Props = {
  opentextpage: Boolean;
  toTextPage: Function;
};

const InputTextSumit: FC<Props> = ({opentextpage, toTextPage}) => {
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
      {opentextpage && <InputText TextPage={() => toTextPage()} />}
    </View>
  );
};

export default InputTextSumit;
