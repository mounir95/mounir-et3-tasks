import React, {FC, useState} from 'react';
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
  if (ObjectArray._currentValue.length - 1 <= 0) {
    lastIndex = 0;
  } else {
    lastIndex =
      ObjectArray._currentValue[ObjectArray._currentValue.length - 1].Myid;
  }
  const [
    {id, arrayval},
    setNext,
  ] = useState({
    id: lastIndex,
    arrayval: ['']
  });

    const checkValidation = (stringarray: string []) => {
            setNext(
        val =>
          (val = {
            id: lastIndex,
                arrayval: stringarray
          }),
      );
      if (stringarray[2] !== '') {
      if (stringarray[1] !== '') {
        if (stringarray[0]) {
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
    if (checkValidation(arrayval) === true) {
      ObjectArray.Myid = id + 1;
      setNext(
        val =>
          (val = {
            id: lastIndex,
                arrayval: ['']
          }),
      );
      inputAdd();
    }else{
      console.warn(checkValidation);
    };
  };

  const handlePressCloseButton = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
              arrayval: ['']
        }),
    );
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
            margin: 5
          }}>
          <InputDatePicker />
          <InputSelectList />
          <InputTextInput 
          Validated= {(stringarray: string[]) => checkValidation(stringarray)}/>
          <InputSSDList />
          <InputRadioButton
            RadioButtons={() => toRadioButtons()}
          />
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
