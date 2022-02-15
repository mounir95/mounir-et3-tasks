import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import InputSelectList from './selectlists/SelectListSubmit';
import InputTextInput from './textinputs/TextInputSubmit';
import InputSSDList from './ssdlists/SSDListsSubmit';
import InputRadioButton from './radiobuttons/RadioButtonsSubmit';
import {ObjectArray} from '../../App';
import InputDatePicker from './datepicking/DatePickerSubmit';

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
    {id, selectpagetrue, textpagetrue, ssdliststrue, radiobuttonstrue, datepagetrue},
    setNext,
  ] = useState({
    id: lastIndex,
    datepagetrue: true,
    selectpagetrue: false,
    textpagetrue: false,
    ssdliststrue: false,
    radiobuttonstrue: false,
  });

  const DatePage = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          datepagetrue: false,
          selectpagetrue: true,
          textpagetrue: false,
          ssdliststrue: false,
          radiobuttonstrue: false,
        }),
    );
  };

  const SelectList = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          datepagetrue: false,
          selectpagetrue: false,
          textpagetrue: true,
          ssdliststrue: false,
          radiobuttonstrue: false,
        }),
    );
  };

  const TextPage = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          datepagetrue: false,
          selectpagetrue: false,
          textpagetrue: false,
          ssdliststrue: true,
          radiobuttonstrue: false,
        }),
    );
  };
  const SSDLists = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          datepagetrue: false,
          selectpagetrue: false,
          textpagetrue: false,
          ssdliststrue: false,
          radiobuttonstrue: true,
        }),
    );
  };

  const RadioButtons = () => {
    ObjectArray.Myid = id + 1;
    setNext(
      val =>
        (val = {
          id: lastIndex,
          datepagetrue: true,
          selectpagetrue: false,
          textpagetrue: false,
          ssdliststrue: false,
          radiobuttonstrue: false,
        }),
    );
    inputAdd();
  };

  const handlePressCloseButton = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          datepagetrue: true,
          selectpagetrue: false,
          textpagetrue: false,
          ssdliststrue: false,
          radiobuttonstrue: false,
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
          <InputDatePicker
            opendatepage={datepagetrue}
            toDatePage={() => DatePage()}
          />
          <InputSelectList
            openselectpage={selectpagetrue}
            toSelectList={() => SelectList()}
          />
          <InputTextInput
            opentextpage={textpagetrue}
            toTextPage={() => TextPage()}
          />
          <InputSSDList
            openssdlists={ssdliststrue}
            toSSDLists={() => SSDLists()}
          />
          <InputRadioButton
            openradiobuttons={radiobuttonstrue}
            toRadioButtons={() => RadioButtons()}
          />
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
