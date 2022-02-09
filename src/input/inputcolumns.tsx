import React from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import InputRowOne from './inputcolumns1/inputrows1';
import InputRowTwo from './inputcolumns2/inputrows2';
import InputRowThree from './inputcolumns3/inputrows3';
import InputRowFour from './inputcolumns4/inputrows4';

const InputRow = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.childStyle}>
        <InputRowOne />
      </View>
      <View style={styles.childStyle}>
        <InputRowTwo />
      </View>
      <View style={styles.childStyle}>
        <InputRowThree />
      </View>
      <View style={styles.childStyle}>
        <InputRowFour />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    // flex: 1,// flexWrap: 'wrap',
    flexDirection: 'column',
    marginTop: 20,
    backgroundColor: '#776677',
    alignItems: 'center',
    justifyContent: 'center',
  },
  childStyle: {
    width: '90%',
    // height: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'yellow',
    margin: 5,
  },
});
export default InputRow;
