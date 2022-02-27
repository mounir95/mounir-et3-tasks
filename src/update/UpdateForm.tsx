import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import InputSelectList from './selectlists/SelectListSubmit';
import InputTextInput from './textinputs/TextInputSubmit';
import InputSSDList from './ssdlists/SSDListsSubmit';
import InputRadioButton from './radiobuttons/RadioButtonsSubmit';
import {ExcelMobx, TPrObject} from '../constants/UseContext';
import {UpdateFormMobx} from '../constants/UseContext';
import globalObj from '../constants/ObjectStore';
import {observer} from 'mobx-react';

const UpdateRow = observer(() => {
  const RadioButtons = () => {
    globalObj.arrayofobjects.map((e: TPrObject) => {
      if (e.Myid === ExcelMobx.id) {
        e.Myid = ExcelMobx.id;
        e.Myselist = UpdateFormMobx.objectval.Myselist;
        e.Myplatform = UpdateFormMobx.objectval.Myplatform;
        e.Myreleaseversion = UpdateFormMobx.objectval.Myreleaseversion;
        e.Mystatuslist = UpdateFormMobx.objectval.Mystatuslist;
        e.Mysize = UpdateFormMobx.objectval.Mysize;
        e.Mydificulity = UpdateFormMobx.objectval.Mydificulity;
        e.Myprlink = UpdateFormMobx.objectval.Myprlink;
        e.Mycomment = UpdateFormMobx.objectval.Mycomment;
        e.MyreviewedbyBY = UpdateFormMobx.objectval.MyreviewedbyBY;
        e.MyreviewedbyAH = UpdateFormMobx.objectval.MyreviewedbyAH;
        e.MyreviewedbyHT = UpdateFormMobx.objectval.MyreviewedbyHT;
      }
    });
    UpdateFormMobx.radioButtons();
    ExcelMobx.resetStore();
  };

  const handlePressCloseButton = () => {
    UpdateFormMobx.resetStore();
    ExcelMobx.resetStore();
  };

  return (
    <View>
      {ExcelMobx.updatefalse && (
        <View
          style={{
            flexDirection: 'column',
            marginTop: 15,
            marginBottom: 5,
            backgroundColor: '#776677',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <InputSelectList />
          <InputTextInput />
          <InputSSDList />
          <InputRadioButton toRadioButtons={() => RadioButtons()} />
        </View>
      )}
      {ExcelMobx.updatefalse && (
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
});

export default UpdateRow;
