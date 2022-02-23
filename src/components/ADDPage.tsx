import React, {useEffect, useState} from 'react';
import {ScrollView, View, Button} from 'react-native';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import AddButton from './AddButton';
import InputForm from '../input/InputForm';
import {TPrObject} from '../constants/UseContext';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Excel: {arrayofobjects: TPrObject[]};
};

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Excel'>;

const ADDPage = () => {
  const navigation = useNavigation<mainScreenProp>();
  const [{addbuttontrue, inputform, addtext}, setState] = useState({
    addbuttontrue: true,
    inputform: false,
    addtext: 'ADD',
  });

  let [objectarray, setArrayObject] = useState([]);

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
    objectarray = filter(
      orderBy(objectarray, (obj: TPrObject) => obj.Myid, ['asc']),
      (c: TPrObject) => {
        return c.hasOwnProperty('Myid');
      },
    );
    setArrayObject(objectarray);
  };

  const inputAddButton = (lastarrayobject: TPrObject) => {
    console.log('before', objectarray);
    // const newobjearray = objectarray.push(lastarrayobject);
    setArrayObject([...objectarray, lastarrayobject]);
    console.log('after', objectarray);
  };

  const checkTableIssue = () => {
    setAllChanges();
    resetState();
    navigation.navigate('Excel', {arrayofobjects: objectarray});
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
    setArrayObject(objectarray);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <InputForm
          inptformtrue={inputform}
          inputAdd={(objectval: TPrObject) => inputAddButton(objectval)}
          inputClose={() => inputCloseButton()}
          lastobject={objectarray[objectarray.length - 1]}
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
