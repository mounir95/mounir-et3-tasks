import React, {FC} from 'react';
import {View} from 'react-native';
import {UpdateFormMobx} from '../../constants/UseContext';
import RadioButtonInput from './RadioButtons';
import {observer} from 'mobx-react';

type Props = {
  toRadioButtons: Function;
};

const RadioButtonInputSumit: FC<Props> = observer(({toRadioButtons}) => {
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
      {UpdateFormMobx.radiobuttonstrue && (
        <RadioButtonInput RadioButtons={() => toRadioButtons()} />
      )}
    </View>
  );
});

export default RadioButtonInputSumit;
