import React, {useState} from 'react';
import type {Node} from 'react';
import ExcelRows from './src/Excels/excelrows';
import AddButton from './src/addButton';
import InputRow from './src/input/inputColumns';
import {ScrollView, View} from 'react-native';
import {Context} from 'vm';

export let ObjectArray: Context = React.createContext<object[]>([{}]);

const App: () => Node = () => {
  const [{buttontrue, inputform, addtext}, setState] = useState({
    buttontrue: true,
    inputform: false,
    addtext: 'ADD',
  });

  const onButtonPress = () => {
    if (addtext === 'Close') {
      setState(val => (val = {buttontrue: true, inputform: false, addtext: 'ADD'}));
    } else {
      setState(val => (val = {buttontrue: false, inputform: true, addtext: 'Close'}));
    }
  };

  const inputAddButton = () => {
    setState(val => (val = {buttontrue: true, inputform: false, addtext: 'ADD'}));
    ObjectArray = React.createContext<Array<number>>([...ObjectArray._currentValue, ObjectArray]);
  }

  const inputCloseButton = () => {
    setState(val => (val = {buttontrue: true, inputform: false, addtext: 'ADD'}));
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ExcelRows />
        <InputRow addbuttontrue={!buttontrue} inputformtrue={inputform} inputAdd={() => inputAddButton()} inputClose={() =>inputCloseButton()} />
      </ScrollView>
      <AddButton addbuttontrue={buttontrue} buttontext={addtext} buttonPressed={() => onButtonPress()} />
    </View>
  );
};

export default App;
