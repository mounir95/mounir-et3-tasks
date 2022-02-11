import React from 'react';
import {View} from 'react-native';
import InputRowFour from './inputRows4';

type Props = {
  nextinputfour: Boolean;
  nextFaseFour: Function;
};

const InputRowFourSumit = ({nextinputfour, nextFaseFour}) => {
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
      {nextinputfour && <InputRowFour nextfase4={() => nextFaseFour()} />}
    </View>
  );
};

export default InputRowFourSumit;
