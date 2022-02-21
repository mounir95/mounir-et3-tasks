import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import InputSelectList from './selectlists/SelectListSubmit';
import InputTextInput from './textinputs/TextInputSubmit';
import InputSSDList from './ssdlists/SSDListsSubmit';
import InputRadioButton from './radiobuttons/RadioButtonsSubmit';
import {ObjectArray} from '../components/ADDPage';
import {Context} from 'vm';

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
    {selectpagetrue, textpagetrue, ssdliststrue, radiobuttonstrue},
    setNext,
  ] = useState({
    selectpagetrue: true,
    textpagetrue: false,
    ssdliststrue: false,
    radiobuttonstrue: false,
  });

  const SelectList = () => {
    setNext(
      val =>
        (val = {
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
          selectpagetrue: false,
          textpagetrue: false,
          ssdliststrue: false,
          radiobuttonstrue: true,
        }),
    );
  };

  const RadioButtons = () => {
    ObjectArray._currentValue.map((e: Context) => {
      if (e.Myid === updatedid) {
        e.Myid = updatedid;
        e.Myselist = ObjectArray.Myselist;
        e.Myplatform = ObjectArray.Myplatform;
        e.Myreleaseversion = ObjectArray.Myreleaseversion;
        e.Mystatuslist = ObjectArray.Mystatuslist;
        e.Mysize = ObjectArray.Mysize;
        e.Mydificulity = ObjectArray.Mydificulity;
        e.Myprlink = ObjectArray.Myprlink;
        e.Mycomment = ObjectArray.Mycomment;
        e.MyreviewedbyBY = ObjectArray.MyreviewedbyBY;
        e.MyreviewedbyAH = ObjectArray.MyreviewedbyAH;
        e.MyreviewedbyHT = ObjectArray.MyreviewedbyHT;
      }
    });
    setNext(
      val =>
        (val = {
          selectpagetrue: true,
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
          selectpagetrue: true,
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
          <InputSelectList
            updatedid={updatedid}
            openselectpage={selectpagetrue}
            toSelectList={() => SelectList()}
          />
          <InputTextInput
            updatedid={updatedid}
            opentextpage={textpagetrue}
            toTextPage={() => TextPage()}
          />
          <InputSSDList
            updatedid={updatedid}
            openssdlists={ssdliststrue}
            toSSDLists={() => SSDLists()}
          />
          <InputRadioButton
            updatedid={updatedid}
            openradiobuttons={radiobuttonstrue}
            toRadioButtons={() => RadioButtons()}
          />
        </View>
      )}
      {inputupdateformtrue && (
        <TouchableOpacity onPress={() => handlePressCloseButton()}>
          <View style={{alignItems: 'center'}}>
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
