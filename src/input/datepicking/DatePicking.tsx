import React, { FC, useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ObjectArray } from '../../App';

type Props = {
  DatePage: Function;
};

const Datepicker: FC<Props> = ({ DatePage }) => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event: any, date?: Date) => {
    setDate(date);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  const handlePressSubmitButton = () => {
    ObjectArray.Mydate = JSON.stringify(date);
    DatePage();
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
      {/* Display the selected date */}
      <View style={{ padding: 20, backgroundColor: '#eee', borderRadius: 10 }}>
        <Text style={{ fontSize: 18, color: 'black' }}>{date.toUTCString()}</Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <View style={{ padding: 25 }}>
          <Button title="Show Picker" color="purple" onPress={showPicker} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
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
      <View style={{ marginTop: 15 }}>
        <Button title={'Next'} onPress={() => handlePressSubmitButton()} />
      </View>
    </View>
  );
};

export default Datepicker;
