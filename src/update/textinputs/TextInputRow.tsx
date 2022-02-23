import React, {FC} from 'react';
import {SafeAreaView, TextInput} from 'react-native';

type Props = {
  onchangefun: Function;
  stringval: string;
};

const TextInputRow: FC<Props> = ({onchangefun, stringval}) => {
  return (
    <SafeAreaView>
      <TextInput
        style={{height: 30, margin: 12, borderWidth: 1, padding: 5}}
        onChangeText={event => onchangefun(event)}
        placeholder={stringval}
      />
    </SafeAreaView>
  );
};

export default TextInputRow;
