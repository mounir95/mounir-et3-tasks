import React, {FC} from 'react';
import {View} from 'react-native';
import {TPrObject} from '../../constants/UseContext';
import RadioButtonInput from './RadioButtons';

type Props = {
  updatedid: number;
  openradiobuttons: Boolean;
  toRadioButtons: Function;
  objectval: TPrObject;
  arrayobjectval: TPrObject[];
};

const RadioButtonInputSumit: FC<Props> = ({
  updatedid,
  openradiobuttons,
  toRadioButtons,
  objectval,
  arrayobjectval,
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
          objectval={objectval}
          arrayobjectval={arrayobjectval}
        />
      )}
    </View>
  );
};

export default RadioButtonInputSumit;
