import React, {SyntheticEvent} from 'react';
import {View, Text, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {observer} from 'mobx-react';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';
import getLanguageStore from '../../stores/LanguageStore';

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
        padding: 20,
      }}>
      <View style={{padding: 20, backgroundColor: '#eee', borderRadius: 10}}>
        <Text style={{fontSize: 18, color: 'black'}}>
          {getGlobalObjectStore().emptyobject.get().Mydate}
        </Text>
      </View>
      {!getGlobalObjectStore().isPickerShow.get() && (
        <View style={{padding: 25}}>
          <Button
            title={getLanguageStore.get('showpicker')}
            color="purple"
            onPress={showPicker}
          />
        </View>
      )}
      {getGlobalObjectStore().isPickerShow.get() && (
        <DateTimePicker
          value={getGlobalObjectStore().date.get()}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={{
            width: 320,
            height: 260,
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
