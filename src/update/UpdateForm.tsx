import React from 'react';
import {View} from 'react-native';
import InputSelectList from './selectlists/SelectListSubmit';
import InputTextInput from './textinputs/TextInputSubmit';
import InputSSDList from './ssdlists/SSDListsSubmit';
import InputRadioButton from './radiobuttons/RadioButtonsSubmit';
import getExcelStore from '../stores/ExcelStore';
import {observer} from 'mobx-react';
import {colors, windowWidth} from '../constants/constants';

const UpdateRow = observer(() => {
  return (
    <View>
      {getExcelStore().updatefalse.get() && (
        <View
          style={{
            flexDirection: 'column',
            marginTop: windowWidth * 0.041,
            marginBottom: windowWidth * 0.013,
            backgroundColor: colors.lightpurple,
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
