/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import InputSelectList from './selectlists/SelectList';
import InputTextInput from './textinputs/TextInput';
import InputSSDList from './ssdlists/SSDLists';
import InputRadioButton from './radiobuttons/RadioButtons';
import InputDatePicker from './datepicking/DatePicking';
import getGlobalObjectStore from '../stores/GlobalObjectStore';
import getAddPageStore from '../stores/AddPageStore';
import {observer} from 'mobx-react';
import getRequiredStore from '../stores/RequiredStore';

const InputRow = observer(() => {
  const toRadioButtons = () => {
    if (getRequiredStore().checkInputValidation() === true) {
      getGlobalObjectStore().emptyobject.get().Myid = getGlobalObjectStore().lastIndexToUse.get();
      getAddPageStore().openInputForm();
      getGlobalObjectStore().addObjectToArray(getGlobalObjectStore().emptyobject.get());
    }
  };

  const handlePressCloseButton = () => {
    getAddPageStore().openInputForm();
  };

  return (
    <View>
      {getAddPageStore().inputform.get() && (
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
      {getAddPageStore().inputform.get() && (
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
