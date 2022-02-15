import React, {useState} from 'react';
import type {Node} from 'react';
import ExcelRows from './src/excels/ExcelRows';
import AddButton from './src/AddButton';
import InputForm from './src/input/InputForm';
import UpdateForm from './src/input/UpdateForm';
import {ScrollView, View} from 'react-native';
import {Context} from 'vm';
import _ from 'lodash';

export let ObjectArray: Context = React.createContext<object[]>([{}]);

const App: () => Node = () => {
  const [
    {id, addbuttontrue, inputform, updatefalse, filterfalse, addtext},
    setState,
  ] = useState({
    id: -1,
    addbuttontrue: true,
    updatefalse: false,
    inputform: false,
    filterfalse: false,
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
          filterfalse: false,
          addtext: 'ADD',
        }),
    );
  };

  const setDateSort = (newobjectarray: object) => {
    ObjectArray._currentValue = newobjectarray;
    ObjectArray = React.createContext<object[]>([...ObjectArray._currentValue]);
    setState(
      val =>
        (val = {
          id: -1,
          addbuttontrue: true,
          updatefalse: false,
          inputform: false,
          filterfalse: false,
          addtext: 'ADD',
        }),
    );
  };

  const onButtonPress = () => {
    if (addtext === 'Close') {
      console.log('aaaaaaaaaaaaaa');
      setState(
        val =>
          (val = {
            id: -1,
            addbuttontrue: true,
            updatefalse: false,
            inputform: false,
            filterfalse: false,
            addtext: 'ADD',
          }),
      );
    } else {
      if (ObjectArray._currentValue.length >= 2) {
        ObjectArray._currentValue = _.orderBy(
          ObjectArray._currentValue,
          o => o.Myid,
          ['asc'],
        );
        ObjectArray._currentValue.unshift({});
        ObjectArray._currentValue.pop();
        ObjectArray = React.createContext<object[]>([
          ...ObjectArray._currentValue,
        ]);
      }
      setState(
        val =>
          (val = {
            id: -1,
            addbuttontrue: false,
            updatefalse: false,
            inputform: true,
            filterfalse: false,
            addtext: 'Close',
          }),
      );
    }
  };

  const filterPressed = () => {
    setState(
      val =>
        (val = {
          id: -1,
          addbuttontrue: !addbuttontrue,
          updatefalse: false,
          inputform: false,
          filterfalse: !filterfalse,
          addtext: 'ADD',
        }),
    );
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
          filterfalse: false,
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
          filterfalse: false,
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
          filterfalse: false,
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
          filterfalse: false,
          addtext: 'ADD',
        }),
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ExcelRows
          openfilter={filterfalse}
          updateiconid={id}
          filterPress={() => filterPressed()}
          dateSort={(newobjectarray: object) => setDateSort(newobjectarray)}
          onUpdate={(objid: number) => onUpdateFun(objid)}
          onDelete={(objid: number) => onDeletFun(objid)}
        />
        <InputForm
          inptformtrue={inputform}
          inputAdd={() => inputAddButton()}
          inputClose={() => inputCloseButton()}
        />
        <UpdateForm
          inputupdateformtrue={updatefalse}
          updatedid={id}
          inputUpdate={() => inputUpdateButton()}
          inputClose={() => inputCloseButton()}
        />
      </ScrollView>
      <AddButton
        addbuttontrue={addbuttontrue}
        buttontext={addtext}
        buttonPressed={() => onButtonPress()}
      />
    </View>
  );
};

export default App;
