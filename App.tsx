import React, {useState} from 'react';
import type {Node} from 'react';
import ExcelRows from './src/Excels/excelrows';
import AddButton from './src/addbutton';
import InputRow from './src/input/inputcolumns';
import {ScrollView, View} from 'react-native';
import {Context} from 'vm';

export let ObjectArray: Context = React.createContext<object[]>([{}]);

const App: () => Node = () => {
  const [{inputform, addtext}, setState] = useState({
    inputform: false,
    addtext: 'ADD',
  });

  const onButtonPress = () => {
    if (addtext === 'Close') {
      setState(val => (val = {inputform: false, addtext: 'ADD'}));
    } else {
      setState(val => (val = {inputform: true, addtext: 'Close'}));
    }
  };

  const inputAddButton = () => {
    setState(val => (val = {inputform: false, addtext: 'ADD'}));
    ObjectArray = React.createContext<Array<number>>([...ObjectArray._currentValue, ObjectArray]);
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ExcelRows />
        <InputRow inputformtrue={inputform} inputAdd={() => inputAddButton()}/>
      </ScrollView>
      <AddButton buttontext={addtext} buttonPressed={() => onButtonPress()} />
    </View>
  );
};

export default App;
