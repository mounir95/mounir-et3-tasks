import React, {FC} from 'react';
import {View} from 'react-native';
import RadioButtonInput from './RadioButtons';

type Props = {
  openradiobuttons: Boolean;
  toRadioButtons: Function;
};

const RadioButtonInputSumit: FC<Props> = ({
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
        <RadioButtonInput RadioButtons={() => toRadioButtons()} />
      )}
    </View>
  );
};

export default RadioButtonInputSumit;
