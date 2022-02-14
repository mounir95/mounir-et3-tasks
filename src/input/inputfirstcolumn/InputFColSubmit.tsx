import React, {FC} from 'react';
import {View} from 'react-native';
import InputRowOne from './InputFCol';

type Props = {
  nextinputone: Boolean;
  nextFaseOne: Function;
};

const InputRowOneSumit: FC<Props> = ({nextinputone, nextFaseOne}) => {
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
