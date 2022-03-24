import React, {SyntheticEvent} from 'react';
import {View, Text, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {observer} from 'mobx-react';
import getGlobalObjectStore from '../../../../stores/GlobalObjectStore';
import getLanguageStore from '../../../../stores/LanguageStore';
import {windowHeight, windowWidth} from '../../../../constants/constants';
import {colors} from '../../../../constants/constants';

const Datepicker = observer(() => {
  const showPicker = () => {
    getGlobalObjectStore().inputIsPickerShow(true);
  };

  const onChange = (
    event: SyntheticEvent<Readonly<{timestamp: number}>, Event>,
    date?: Date,
  ) => {
    getGlobalObjectStore().inputDate(date);
    if (Platform.OS === 'android') {
      getGlobalObjectStore().inputIsPickerShow(false);
    }
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: windowWidth * 0.055,
      }}>
      <View
        style={{
          padding: windowWidth * 0.055,
          backgroundColor: colors.eee,
          borderRadius: windowWidth * 0.027,
        }}>
        <Text style={{fontSize: 18, color: colors.black}}>
          {getGlobalObjectStore().emptyobject.get().Mydate}
        </Text>
      </View>
      {!getGlobalObjectStore().isPickerShow.get() && (
        <View style={{padding: windowWidth * 0.07}}>
          <Button
            title={getLanguageStore.get('showpicker')}
            color={colors.purple}
            onPress={showPicker}
          />
        </View>
      )}
      {getGlobalObjectStore().isPickerShow.get() && (
        <DateTimePicker
          value={new Date(Date.now())}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={{
            width: windowHeight * 0.88,
            height: windowHeight * 0.43,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        />
      )}
    </View>
  );
});

export default Datepicker;
