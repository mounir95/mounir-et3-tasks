import React from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import InputRowOne from './inputcolumns1/inputrows1';
import InputRowTwo from './inputcolumns2/inputrows2';
import InputRowThree from './inputcolumns3/inputrows3';

const InputRow = () => {
    
    return (
        <View style={styles.viewStyle}>
            <View  style={styles.childStyle}><InputRowOne /></View>
            <View style={styles.childStyle}><InputRowTwo /></View>
            <View style={styles.childStyle}><InputRowThree /></View>
        </View>
    );
};
const styles = StyleSheet.create({
  viewStyle: {
    // flex: 1,
    // flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: 'blue'
  },
  childStyle: {
    // width: '50%',
    height: 100,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black',
    margin:5,
  },
});
export default InputRow;