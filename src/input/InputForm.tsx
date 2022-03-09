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
import getLanguageStore from '../stores/LanguageStore';
import {colors, windowWidth} from '../constants/constants';

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
            marginTop: windowWidth * 0.041,
            marginBottom: windowWidth * 0.013,
            backgroundColor: colors.lightpurple,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: windowWidth * 0.9,
              backgroundColor: colors.white,
              borderWidth: windowWidth * 0.002,
              borderColor: colors.yellow,
              margin: windowWidth * 0.013,
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
                borderWidth: windowWidth * 0.006,
                borderRadius: windowWidth * 0.07,
                padding: windowWidth * 0.03,
                marginTop: windowWidth * 0.07,
                marginBottom: windowWidth * 0.013,
                borderColor: colors.lightpurple,
                color: colors.lightpurple,
                backgroundColor: colors.white,
              }}>
              {getLanguageStore.get('closetext')}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
});

export default InputRow;
