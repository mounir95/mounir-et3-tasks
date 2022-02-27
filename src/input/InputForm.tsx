/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import InputSelectList from './selectlists/SelectList';
import InputTextInput from './textinputs/TextInput';
import InputSSDList from './ssdlists/SSDLists';
import InputRadioButton from './radiobuttons/RadioButtons';
import InputDatePicker from './datepicking/DatePicking';
import globalObj from '../constants/ObjectStore';
import {AddPageMobx} from '../constants/UseContext';
import {observer} from 'mobx-react';

const InputRow = observer(() => {
  let lastIndex: number;
  if (globalObj.arrayofobjects[globalObj.objectarrayCount - 1] === undefined) {
    lastIndex = 1;
  } else {
    lastIndex =
      globalObj.arrayofobjects[globalObj.objectarrayCount - 1].Myid + 1;
  }

  const checkValidation = () => {
    if (
      globalObj.emptyobject.Myreleaseversion !== ''
    ) {
      if (
        globalObj.emptyobject.Myprlink !== ''
      ) {
        if (
          globalObj.emptyobject.Mycomment !== ''
        ) {
          return true;
        } else {
          return 'Pr Link Required';
        }
      } else {
        return 'Comment Required';
      }
    } else {
      return 'Release Version Required';
    }
  };

  const toRadioButtons = () => {
    if (checkValidation() === true) {
      globalObj.emptyobject.Myid = lastIndex;
      AddPageMobx.setAddPageMobx();
      globalObj.addObjectArray(globalObj.emptyobject);
    } else {
      console.warn(checkValidation);
    }
  };

  const handlePressCloseButton = () => {
    AddPageMobx.setAddPageMobx();
  };

  return (
    <View>
      {AddPageMobx.inputform && (
        <View
          style={{
            flexDirection: 'column',
            marginTop: 15,
            marginBottom: 5,
            backgroundColor: '#776677',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '90%',
              // height: 100,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'yellow',
              margin: 5,
            }}>
            <InputDatePicker />
            <InputSelectList />
            <InputTextInput />
            <InputSSDList />
            <InputRadioButton radioButtons={() => toRadioButtons()} />
          </View>
        </View>
      )}
      {AddPageMobx.inputform && (
        <TouchableOpacity onPress={() => handlePressCloseButton()}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                borderWidth: 2,
                borderRadius: 25,
                padding: 10,
                marginTop: 25,
                marginBottom: 5,
                borderColor: '#776677',
                color: '#776677',
                backgroundColor: 'white',
              }}>
              Close
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
});

export default InputRow;
