/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import InputSelectList from './selectlists/SelectList';
import InputTextInput from './textinputs/TextInput';
import InputSSDList from './ssdlists/SSDLists';
import InputRadioButton from './radiobuttons/RadioButtons';
import InputDatePicker from './datepicking/DatePicking';
import globalObject from '../stores/GlobalObjectStore';
import {addPageMobx} from '../stores/AddPageStore';
import {observer} from 'mobx-react';
import {requiredMobx} from '../stores/RequiredStore';

const InputRow = observer(() => {
  let lastIndex: number;
  if (globalObject.arrayofobjects[globalObject.objectarrayCount - 1] === undefined) {
    lastIndex = 1;
  } else {
    lastIndex =
      globalObject.arrayofobjects[globalObject.objectarrayCount - 1].Myid + 1;
  }

  const toRadioButtons = () => {
    if (requiredMobx.checkInputValidation() === true) {
      globalObject.emptyobject.Myid = lastIndex;
      addPageMobx.setAddPageMobx();
      globalObject.addObjectArray(globalObject.emptyobject);
    }
  };

  const handlePressCloseButton = () => {
    addPageMobx.setAddPageMobx();
  };

  return (
    <View>
      {addPageMobx.inputform && (
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
      {addPageMobx.inputform && (
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
