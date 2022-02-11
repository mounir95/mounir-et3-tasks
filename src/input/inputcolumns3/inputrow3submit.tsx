import React from 'react';
import {View} from 'react-native';
import InputRowThree from './inputRows3';

type Props = {
  nextinputthree: Boolean;
  nextFaseThree: Function;
};

const InputRowThreeSumit = ({nextinputthree, nextFaseThree}) => {
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
      {nextinputthree && <InputRowThree nextfase3={() => nextFaseThree()} />}
    </View>
  );
};

export default InputRowThreeSumit;
