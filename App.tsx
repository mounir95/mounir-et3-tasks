import React, {useState} from 'react';
import type {Node} from 'react';
import ExcelRows from './src/excels/ExcelRows';
import AddButton from './src/AddButton';
import InputRow from './src/input/InputColumns';
import UpdateRow from './src/input/InputUpdateColumns';
import {ScrollView, View} from 'react-native';
import {Context} from 'vm';

export let ObjectArray: Context = React.createContext<object[]>([{}]);

const App: () => Node = () => {
  const [{id, addbuttontrue, inputform, updatefalse, addtext}, setState] =
    useState({
      id: -1,
      addbuttontrue: true,
      updatefalse: false,
      inputform: false,
      addtext: 'ADD',
    });

  const setAllChanges = () => {
    ObjectArray = React.createContext<object[]>([...ObjectArray._currentValue]);
    // FilteredObjectArray = React.createContext< object[]>([...FilteredObjectArray._currentValue])
    setState(
      val =>
        (val = {
          id: -1,
          addbuttontrue: true,
          updatefalse: false,
          inputform: false,
          addtext: 'ADD',
        }),
    );
  };

  const onButtonPress = () => {
    if (addtext === 'Close') {
      setState(
        val =>
          (val = {
            id: -1,
            addbuttontrue: true,
            updatefalse: false,
            inputform: false,
            addtext: 'ADD',
          }),
      );
    } else {
      setState(
        val =>
          (val = {
            id: -1,
            addbuttontrue: false,
            updatefalse: false,
            inputform: true,
            addtext: 'Close',
          }),
      );
    }
  };

  const onDeletFun = (objid: number) => {
    ObjectArray._currentValue = ObjectArray._currentValue.filter(
      (object: Context) => {
        if (object.Myid !== objid) {
          return object;
        }
      },
    );
    ObjectArray._currentValue2 = ObjectArray._currentValue;
    setAllChanges();
  };

  const onUpdateFun = (objid: number) => {
    setState(
      val =>
        (val = {
          id: objid,
          addbuttontrue: false,
          updatefalse: true,
          inputform: false,
          addtext: 'ADD',
        }),
    );
  };

  const inputUpdateButton = () => {
    setState(
      val =>
        (val = {
          id: -1,
          addbuttontrue: true,
          updatefalse: false,
          inputform: false,
          addtext: 'ADD',
        }),
    );
    setAllChanges();
  };

  const inputAddButton = () => {
    setState(
      val =>
        (val = {
          id: -1,
          addbuttontrue: true,
          updatefalse: false,
          inputform: false,
          addtext: 'ADD',
        }),
    );
    ObjectArray = React.createContext<Array<number>>([
      ...ObjectArray._currentValue,
      ObjectArray,
    ]);
  };

  const inputCloseButton = () => {
    setState(
      val =>
        (val = {
          id: -1,
          addbuttontrue: true,
          updatefalse: false,
          inputform: false,
          addtext: 'ADD',
        }),
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView key="firstpage">
        <ExcelRows
          key="excel"
          updateiconid={id}
          onUpdate={(objid: number) => onUpdateFun(objid)}
          onDelete={(objid: number) => onDeletFun(objid)}
        />
        <InputRow
          key="inputRow"
          inptformtrue={inputform}
          inputAdd={() => inputAddButton()}
          inputClose={() => inputCloseButton()}
        />
        <UpdateRow
          key="updateRow"
          inputupdateformtrue={updatefalse}
          updatedid={id}
          inputUpdate={() => inputUpdateButton()}
          inputClose={() => inputCloseButton()}
        />
      </ScrollView>
      <AddButton
        key="addbutton"
        addbuttontrue={addbuttontrue}
        buttontext={addtext}
        buttonPressed={() => onButtonPress()}
      />
    </View>
  );
};

export default App;
