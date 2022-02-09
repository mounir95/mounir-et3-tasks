import React from 'react';
import type {Node} from 'react';
import FirstRow from './src/firstrow';
import AddButton from './src/addbutton';
import InputRow from './src/input/inputcolumns';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import FirstColumn from './src/input/inputcolumns1/firstcolumn';
export let ObjectArray : Context = React.createContext<object[]>([{}]);

const App: () => Node = () => {
  return (
    <View style={styles.parentView}>
      <FirstRow />
      <InputRow />
      <AddButton />
      <FirstColumn />
    </View>
  )
}
const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
})
export default App;
