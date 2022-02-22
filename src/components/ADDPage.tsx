import React, {useState} from 'react';
import {ScrollView, View, Button} from 'react-native';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import {Context} from 'vm';
import AddButton from './AddButton';
import InputForm from '../input/InputForm';
import {TPrObject} from '../constants/UseContext';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Excel: {studentID: string};
};

export let ObjectArray: Context = React.createContext<TPrObject | {}[]>([{}]);

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Excel'>;

const ADDPage = () => {
  const navigation = useNavigation<mainScreenProp>();
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
    if (ObjectArray._currentValue.length >= 2) {
      ObjectArray._currentValue = filter(
        orderBy(ObjectArray._currentValue, (obj: TPrObject) => obj.Myid, [
          'asc',
        ]),
        (c: Context) => {
          return c.hasOwnProperty('Myid');
        },
      );
    }
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
    setAllChanges();
    navigation.navigate('Excel', {studentID: addtext});
  };

  const onButtonPress = () => {
    if (addtext === 'Close') {
      resetState();
    } else {
      setState(
        val =>
          (val = {
            addbuttontrue: false,
            inputform: true,
            addtext: 'Close',
          }),
      );
    }
    setAllChanges();
  };

  const inputCloseButton = () => {
    resetState();
    setAllChanges();
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
      <Button title="Check Table Issue" onPress={() => checkTableIssue()} />
    </View>
  );
};

export default ADDPage;
