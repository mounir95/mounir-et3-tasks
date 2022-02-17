import React, { FC, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import InputSelectList from './selectlists/SelectListSubmit';
import InputTextInput from './textinputs/TextInputSubmit';
import InputSSDList from './ssdlists/SSDListsSubmit';
import InputRadioButton from './radiobuttons/RadioButtonsSubmit';
import { ObjectArray } from '../App';
import InputDatePicker from './datepicking/DatePickerSubmit';
import { Context } from 'vm';

type Props = {
  inputUpdate: Function;
  inputClose: Function;
  updatedid: number;
  inputupdateformtrue: Boolean;
};

const UpdateRow: FC<Props> = ({
  inputUpdate,
  inputClose,
  updatedid,
  inputupdateformtrue,
}) => {
  const [
    { id, selectpagetrue, textpagetrue, ssdliststrue, radiobuttonstrue, datepagetrue },
    setNext,
  ] = useState({
    id: updatedid,
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
        id: updatedid,
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
        id: updatedid,
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
        id: updatedid,
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
        id: updatedid,
        datepagetrue: false,
        selectpagetrue: false,
        textpagetrue: false,
        ssdliststrue: false,
        radiobuttonstrue: true,
      }),
    );
  };

  const RadioButtons = () => {
    ObjectArray._currentValue.map((e: Context) => {
      if (e.Myid === id) {
        e.Myid = id;
        e.Myse_list = ObjectArray.Myse_list;
        e.Myplatform = ObjectArray.Myplatform;
        e.Myrelease_version = ObjectArray.Myrelease_version;
        e.Mystatus_list = ObjectArray.Mystatus_list;
        e.Mysize = ObjectArray.Mysize;
        e.Mydificulity = ObjectArray.Mydificulity;
        e.Mypr_Link = ObjectArray.Mypr_Link;
        e.Mycomment = ObjectArray.Mycomment;
        e.Myreveiwed_by_BY = ObjectArray.Myreveiwed_by_BY;
        e.Myreveiwed_by_AH = ObjectArray.Myreveiwed_by_AH;
        e.Myreveiwed_by_HT = ObjectArray.Myreveiwed_by_HT;
      }
    });
    setNext(
      val =>
      (val = {
        id: updatedid,
        datepagetrue: true,
        selectpagetrue: false,
        textpagetrue: false,
        ssdliststrue: false,
        radiobuttonstrue: false,
      }),
    );
    inputUpdate();
  };

  const handlePressCloseButton = () => {
    setNext(
      val =>
      (val = {
        id: updatedid,
        datepagetrue: true,
        selectpagetrue: false,
        textpagetrue: false,
        ssdliststrue: false,
        radiobuttonstrue: false
      }),
    );
    inputClose();
  };

  return (
    <View>
      {inputupdateformtrue && (
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
      {inputupdateformtrue && (
        <TouchableOpacity onPress={() => handlePressCloseButton()}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                borderWidth: 2,
                borderRadius: 25,
                padding: 10,
                marginTop: 10,
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

export default UpdateRow;
