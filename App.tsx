import React from 'react';
import type {Node} from 'react';
import FirstRow from './src/firstrow';
import AddButton from './src/addbutton';
import InputRow from './src/input/inputcolumns';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Context} from 'vm';

export let ObjectArray : Context = React.createContext<object[]>([{}]);

const App: () => Node = () => {
  return (
    <View style={styles.parentView}>
      <ScrollView>
        <FirstRow />
        <InputRow />
      </ScrollView>
      <AddButton />
    </View>
  )
}
const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
})
export default App;
