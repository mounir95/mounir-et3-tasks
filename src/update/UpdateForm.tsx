import React from 'react';
import {View} from 'react-native';
import InputSelectList from './selectlists/SelectListSubmit';
import InputTextInput from './textinputs/TextInputSubmit';
import InputSSDList from './ssdlists/SSDListsSubmit';
import InputRadioButton from './radiobuttons/RadioButtonsSubmit';
import {excelMobx} from '../stores/ExcelStore';
import {observer} from 'mobx-react';

const UpdateRow = observer(() => {
  return (
    <View>
      {excelMobx.updatefalse && (
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
          <InputRadioButton />
        </View>
      )}
    </View>
  );
});

export default UpdateRow;
