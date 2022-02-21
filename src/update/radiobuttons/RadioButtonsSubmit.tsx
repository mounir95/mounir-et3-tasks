import React, {FC} from 'react';
import {View} from 'react-native';
import RadioButtonInput from './RadioButtons';

type Props = {
  updatedid: number;
  openradiobuttons: Boolean;
  toRadioButtons: Function;
};

const RadioButtonInputSumit: FC<Props> = ({
  updatedid,
  openradiobuttons,
  toRadioButtons,
}) => {
  return (
    <View
      style={{
        width: '90%',
        // height: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'yellow',
        margin: 5,
      }}>
      {openradiobuttons && (
        <RadioButtonInput
          updatedid={updatedid}
          RadioButtons={() => toRadioButtons()}
        />
      )}
    </View>
  );
};

export default RadioButtonInputSumit;
