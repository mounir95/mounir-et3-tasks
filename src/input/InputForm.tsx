/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import InputSelectList from './selectlists/SelectList';
import InputTextInput from './textinputs/TextInput';
import InputSSDList from './ssdlists/SSDLists';
import InputRadioButton from './radiobuttons/RadioButtons';
import InputDatePicker from './datepicking/DatePicking';
import {TPrObject} from '../constants/ObjectStore';
import {emptyobject} from '../constants/UseContext';

type Props = {
  inptformtrue: Boolean;
  inputAdd: Function;
  inputClose: Function;
  lastobject: TPrObject;
};

const InputRow: FC<Props> = ({inptformtrue, inputAdd, inputClose, lastobject}) => {
  let lastIndex: number;
  if (lastobject === undefined) {
    lastobject = emptyobject;
    lastIndex = 1;
  } else {
    lastIndex =
      lastobject.Myid + 1;
  }

  const checkValidation = () => {
    if (
      lastobject.hasOwnProperty('Myreleaseversion') &&
      lastobject.Myreleaseversion !== ''
    ) {
      if (
        lastobject.hasOwnProperty('Myprlink') &&
        lastobject.Myprlink !== ''
      ) {
        if (
          lastobject.hasOwnProperty('Mycomment') &&
          lastobject.Mycomment !== ''
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
      lastobject.Myid = lastIndex;
        console.log(lastobject)
      inputAdd(lastobject);
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
            <InputDatePicker newobjectvalue={lastobject}/>
            <InputSelectList newobjectvalue={lastobject}/>
            <InputTextInput newobjectvalue={lastobject}/>
            <InputSSDList newobjectvalue={lastobject}/>
            <InputRadioButton newobjectvalue={lastobject} RadioButtons={() => toRadioButtons()} />
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
