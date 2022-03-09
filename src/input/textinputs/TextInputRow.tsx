import React, {FC} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {windowHeight} from '../../constants/constants';

type Props = {
  onchangefun: Function;
};

const TextInputRow: FC<Props> = ({onchangefun}) => {
  return (
    <SafeAreaView>
      <TextInput
        style={{
          height: windowHeight * 0.05,
          margin: 12,
          borderWidth: 1,
          padding: 5,
        }}
        onChangeText={event => onchangefun(event)}
      />
    </SafeAreaView>
  );
};

export default TextInputRow;
