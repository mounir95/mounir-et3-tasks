import React, {FC} from 'react';
import {View} from 'react-native';
import DateTimePicker from './DatePicking';;

type Props = {
  nextinputfive: Boolean;
  nextFaseFive: Function;
};

const InputDatePicker: FC<Props> = ({nextinputfive, nextFaseFive}) => {
  return (
    <View
      style={{
        width: '90%',
        // height: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'yellow',
        margin: 5
      }}>
      {nextinputfive && <DateTimePicker nextfase5={() => nextFaseFive()} />}
    </View>
  );
};

export default InputDatePicker;
