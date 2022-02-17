import React, {FC} from 'react';
import {View} from 'react-native';
import DateTimePicker from './DatePicking';;

type Props = {
  opendatepage: Boolean;
  toDatePage: Function;
};

const InputDatePicker: FC<Props> = ({opendatepage, toDatePage}) => {
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
      {opendatepage && <DateTimePicker DatePage={() => toDatePage()} />}
    </View>
  );
};

export default InputDatePicker;
