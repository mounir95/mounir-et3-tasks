import React, {useState} from 'react';
import {ScrollView, View, Button} from 'react-native';
import _ from 'lodash';
import {Context} from 'vm';
import AddButton from './AddButton';
import InputForm from '../input/InputForm';
import {NavigationRouteContext} from '@react-navigation/native';

export let ObjectArray: Context = React.createContext<object[]>([{}]);

const ADDPage = ({navigation}) => {
  const [{addbuttontrue, inputform, addtext}, setState] = useState({
    addbuttontrue: true,
    inputform: false,
    addtext: 'ADD',
  });

  const resetState = () => {
    setState(
      val =>
        (val = {
          addbuttontrue: true,
          inputform: false,
          addtext: 'ADD',
        }),
    );
  };

  const setAllChanges = () => {
    ObjectArray._currentValue2 = ObjectArray._currentValue;
    ObjectArray = React.createContext<object[]>([...ObjectArray._currentValue]);
  };

  const inputAddButton = () => {
    resetState();
    ObjectArray = React.createContext<Array<number>>([
      ...ObjectArray._currentValue,
      ObjectArray,
    ]);
  };

  const checkTableIssue = () => {
    navigation.navigate('Excel Page')
  }

  const onButtonPress = () => {
    if (addtext === 'Close') {
      resetState();
    } else {
      if (ObjectArray._currentValue.length >= 2) {
        ObjectArray._currentValue = _.orderBy(
          ObjectArray._currentValue,
          (obj: object) => {
            obj.Myid, ['asc'];
          },
        );
        ObjectArray._currentValue.unshift({});
        ObjectArray._currentValue.pop();
        setAllChanges();
      }
      setState(
        val =>
          (val = {
            addbuttontrue: false,
            inputform: true,
            addtext: 'Close',
          }),
      );
    }
  };

  const inputCloseButton = () => {
    resetState();
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <InputForm
          inptformtrue={inputform}
          inputAdd={() => inputAddButton()}
          inputClose={() => inputCloseButton()}
        />
      </ScrollView>
      <AddButton
        addbuttontrue={addbuttontrue}
        buttontext={addtext}
        buttonPressed={() => onButtonPress()}
      />
      <Button title='Check Table Issue' onPress={() => checkTableIssue()} />
    </View>
  );
};

export default ADDPage;
