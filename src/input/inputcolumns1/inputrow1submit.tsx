import React from 'react';
import {View} from 'react-native';
import InputRowOne from './inputrows1';

type Props = {
  nextinputone: Boolean;
  nextFaseOne: Function;
};

const InputRowOneSumit = ({nextinputone, nextFaseOne}) => {
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
      {nextinputone && <InputRowOne nextfase1={() => nextFaseOne()} />}
    </View>
  );
};

export default InputRowOneSumit;
