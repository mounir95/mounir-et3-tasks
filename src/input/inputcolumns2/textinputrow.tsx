import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

type Props = {
  onchangefun: Function,
  stringval: string,
};

const TextInputRow: FC<Props> = ({onchangefun, stringval}) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={event => onchangefun(event)}
        // value={text}
        placeholder={stringval}
        keyboardType={stringval === 'comment' ? 'default' : 'email-address'}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default TextInputRow;
