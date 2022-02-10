import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {globalStateContext} from '../constants/UseContext';
import InputRowOneSumit from './inputcolumns1/inputrow1submit';
import InputRowTwoSumit from './inputcolumns2/inputrow2submit';
import InputRowThreeSumit from './inputcolumns3/inputrow3submit';
import InputRowFourSumit from './inputcolumns4/inputrow4submit';
import {ObjectArray} from '../../App';

type Props = {
  inputformtrue: Boolean;
  inputAdd: Function;
};

const InputRow: FC<Props> = ({inputformtrue, inputAdd}) => {
  let lastIndex: number;
  if (ObjectArray._currentValue.length - 1 <= 0) {
    lastIndex = 0;
  } else {
    lastIndex =
      ObjectArray._currentValue[ObjectArray._currentValue.length - 1].Myid;
  }
  const [{id, date, nextinput1, nextinput2, nextinput3, nextinput4}, setNext] =
    useState({
      id: lastIndex,
      date: globalStateContext._currentValue.Date,
      nextinput1: true,
      nextinput2: false,
      nextinput3: false,
      nextinput4: false,
    });

  const nextFase1 = () => {
    setNext(
      val =>
        (val = {
          nextinput1: false,
          nextinput2: true,
          nextinput3: false,
          nextinput4: false,
        }),
    );
  };

  const nextFase2 = () => {
    setNext(
      val =>
        (val = {
          nextinput1: false,
          nextinput2: false,
          nextinput3: true,
          nextinput4: false,
        }),
    );
  };
  const nextFase3 = () => {
    setNext(
      val =>
        (val = {
          nextinput1: false,
          nextinput2: false,
          nextinput3: false,
          nextinput4: true,
        }),
    );
  };

  const nextFase4 = () => {
    ObjectArray.Myid = id + 1;
    ObjectArray.Mydate = date;
    inputAdd();
  };

  return (
    <View>
      {inputformtrue && (
        <View
          style={{
            flexDirection: 'column',
            marginTop: 20,
            backgroundColor: '#776677',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <InputRowOneSumit
            nextinputone={nextinput1}
            nextFaseOne={() => nextFase1()}
          />
          <InputRowTwoSumit
            nextinputtwo={nextinput2}
            nextFaseTwo={() => nextFase2()}
          />
          <InputRowThreeSumit
            nextinputthree={nextinput3}
            nextFaseThree={() => nextFase3()}
          />
          <InputRowFourSumit
            nextinputfour={nextinput4}
            nextFaseFour={() => nextFase4()}
          />
        </View>
      )}
    </View>
  );
};

export default InputRow;
