import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import InputSelectList from './selectlists/SelectListSubmit';
import InputTextInput from './textinputs/TextInputSubmit';
import InputSSDList from './ssdlists/SSDListsSubmit';
import InputRadioButton from './radiobuttons/RadioButtonsSubmit';
import {emptyobject, TPrObject} from '../constants/UseContext';

type Props = {
  inputUpdate: Function;
  inputClose: Function;
  updatedid: number;
  inputupdateformtrue: Boolean;
  arrayobjectval: TPrObject[];
};

const UpdateRow: FC<Props> = ({
  inputUpdate,
  inputClose,
  updatedid,
  inputupdateformtrue,
  arrayobjectval
}) => {
  const [
    {selectpagetrue, textpagetrue, ssdliststrue, radiobuttonstrue, objectval},
    setNext,
  ] = useState({
    selectpagetrue: true,
    textpagetrue: false,
    ssdliststrue: false,
    radiobuttonstrue: false,
    objectval: emptyobject,
  });

  const SelectList = () => {
    setNext(
      val =>
        (val = {
          selectpagetrue: false,
          textpagetrue: true,
          ssdliststrue: false,
          radiobuttonstrue: false,
          objectval: objectval,
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
          objectval: objectval,
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
          objectval: objectval,
        }),
    );
  };

  const RadioButtons = () => {
    arrayobjectval.map((e: TPrObject) => {
      if (e.Myid === updatedid) {
        e.Myid = updatedid;
        e.Myselist = objectval.Myselist;
        e.Myplatform = objectval.Myplatform;
        e.Myreleaseversion = objectval.Myreleaseversion;
        e.Mystatuslist = objectval.Mystatuslist;
        e.Mysize = objectval.Mysize;
        e.Mydificulity = objectval.Mydificulity;
        e.Myprlink = objectval.Myprlink;
        e.Mycomment = objectval.Mycomment;
        e.MyreviewedbyBY = objectval.MyreviewedbyBY;
        e.MyreviewedbyAH = objectval.MyreviewedbyAH;
        e.MyreviewedbyHT = objectval.MyreviewedbyHT;
      }
    });
    setNext(
      val =>
        (val = {
          selectpagetrue: true,
          textpagetrue: false,
          ssdliststrue: false,
          radiobuttonstrue: false,
          objectval: objectval,
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
          radiobuttonstrue: false,
          objectval: emptyobject,
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
            objectval={objectval}
            arrayobjectval={arrayobjectval}
          />
          <InputTextInput
            updatedid={updatedid}
            opentextpage={textpagetrue}
            toTextPage={() => TextPage()}
            objectval={objectval}
            arrayobjectval={arrayobjectval}
          />
          <InputSSDList
            updatedid={updatedid}
            openssdlists={ssdliststrue}
            toSSDLists={() => SSDLists()}
            objectval={objectval}
            arrayobjectval={arrayobjectval}
          />
          <InputRadioButton
            updatedid={updatedid}
            openradiobuttons={radiobuttonstrue}
            toRadioButtons={() => RadioButtons()}
            objectval={objectval}
            arrayobjectval={arrayobjectval}
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
