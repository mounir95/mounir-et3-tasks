import React, {FC} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {windowHeight, windowWidth} from '../../constants/constants';

type Props = {
  onchangefun: Function;
};

const TextInputRow: FC<Props> = ({onchangefun}) => {
  return (
    <SafeAreaView>
      <TextInput
        style={{
          height: windowHeight * 0.05,
          margin: windowWidth * 0.033,
          borderWidth: windowWidth * 0.002,
          padding: windowWidth * 0.013,
        }}
        onChangeText={event => onchangefun(event)}
      />
    </SafeAreaView>
  );
};

export default TextInputRow;
