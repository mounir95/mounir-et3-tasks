import React from 'react';
import {View, Text, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {observer} from 'mobx-react';
import globalObj from '../../constants/ObjectStore';

const Datepicker = observer(() => {
  const showPicker = () => {
    globalObj.setIsPickerShow(true);
  };

  const onChange = (event: any, date?: Date) => {
    globalObj.setDate(date);
    if (Platform.OS === 'android') {
      globalObj.setIsPickerShow(false);
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
          {globalObj.emptyobject.Mydate}
        </Text>
      </View>
      {!globalObj.isPickerShow && (
        <View style={{padding: 25}}>
          <Button title="Show Picker" color="purple" onPress={showPicker} />
        </View>
      )}
      {globalObj.isPickerShow && (
        <DateTimePicker
          value={globalObj.date}
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
