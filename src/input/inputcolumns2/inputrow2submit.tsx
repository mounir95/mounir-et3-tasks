import React from 'react';
import {View} from 'react-native';
import InputRowTwo from './inputRows2';

type Props = {
  nextinputtwo: Boolean;
  nextFaseTwo: Function;
};

const InputRowTwoSumit = ({nextinputtwo, nextFaseTwo}) => {
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
      {nextinputtwo && <InputRowTwo nextfase2={() => nextFaseTwo()} />}
    </View>
  );
};

export default InputRowTwoSumit;
