import React, {FC} from 'react';
import {View} from 'react-native';
import InputRowTwo from './InputSCol';

type Props = {
  nextinputtwo: Boolean;
  nextFaseTwo: Function;
};

const InputRowTwoSumit: FC<Props> = ({nextinputtwo, nextFaseTwo}) => {
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
