/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import InputSelectList from './selectlists/SelectList';
import InputTextInput from './textinputs/TextInput';
import InputSSDList from './ssdlists/SSDLists';
import InputRadioButton from './radiobuttons/RadioButtons';
import {ObjectArray} from '../components/ADDPage';
import InputDatePicker from './datepicking/DatePicking';

type Props = {
  inptformtrue: Boolean;
  inputAdd: Function;
  inputClose: Function;
};

const InputRow: FC<Props> = ({inptformtrue, inputAdd, inputClose}) => {
  let lastIndex: number;
  let checkobject =
    ObjectArray._currentValue[ObjectArray._currentValue.length - 1];
  if (!checkobject.hasOwnProperty('Myid')) {
    lastIndex = 1;
  } else {
    lastIndex =
      ObjectArray._currentValue[ObjectArray._currentValue.length - 1].Myid + 1;
  }

  const checkValidation = () => {
    if (
      ObjectArray.hasOwnProperty('Myreleaseversion') &&
      ObjectArray.Myreleaseversion !== ''
    ) {
      if (
        ObjectArray.hasOwnProperty('Myprlink') &&
        ObjectArray.Myprlink !== ''
      ) {
        if (
          ObjectArray.hasOwnProperty('Mycomment') &&
          ObjectArray.Mycomment !== ''
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
      ObjectArray.Myid = lastIndex;
      inputAdd();
    } else {
      console.warn(checkValidation);
    }
  };

  const handlePressCloseButton = () => {
    inputClose();
  };

  return (
    <View>
      {inptformtrue && (
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
            <InputRadioButton RadioButtons={() => toRadioButtons()} />
          </View>
        </View>
      )}
      {inptformtrue && (
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
};

export default InputRow;
