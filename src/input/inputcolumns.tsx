import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {globalStateContext} from '../constants/useContext';
import InputRowOneSumit from './inputcolumns1/inputRow1Submit';
import InputRowTwoSumit from './inputcolumns2/inputRow2Submit';
import InputRowThreeSumit from './inputcolumns3/inputRow3Submit';
import InputRowFourSumit from './inputcolumns4/inputRow4Submit';
import {ObjectArray} from '../../App';

type Props = {
  addbuttontrue: Boolean;
  inputformtrue: Boolean;
  inputAdd: Function;
  inputClose: Function;
};

const InputRow: FC<Props> = ({
  addbuttontrue,
  inputformtrue,
  inputAdd,
  inputClose,
}) => {
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
      nextinput4: false
    });

  const changeDate = setdate => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          date: setdate,
          nextinput1: false,
          nextinput2: true,
          nextinput3: false,
          nextinput4: false
        }),
    );
  };;

  const nextFase1 = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          date: globalStateContext._currentValue.Date,
          nextinput1: false,
          nextinput2: true,
          nextinput3: false,
          nextinput4: false
        }),
    );
  };

  const nextFase2 = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          date: globalStateContext._currentValue.Date,
          nextinput1: false,
          nextinput2: false,
          nextinput3: true,
          nextinput4: false
        }),
    );
  };
  const nextFase3 = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          date: globalStateContext._currentValue.Date,
          nextinput1: false,
          nextinput2: false,
          nextinput3: false,
          nextinput4: true
        }),
    );
  };

  const nextFase4 = () => {
    ObjectArray.Myid = id + 1;
    // ObjectArray.Mydate = date;
    setNext(
      val =>
        (val = {
          id: lastIndex,
          date: globalStateContext._currentValue.Date,
          nextinput1: true,
          nextinput2: false,
          nextinput3: false,
          nextinput4: false
        }),
    );
    inputAdd();
  };

  const handlePressCloseButton = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          date: globalStateContext._currentValue.Date,
          nextinput1: true,
          nextinput2: false,
          nextinput3: false,
          nextinput4: false
        }),
    );
    inputClose();
  };

  return (
    <View>
      {inputformtrue && (
        <View
          style={{
            flexDirection: 'column',
            marginTop: 100,
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
      {addbuttontrue && (
        <TouchableOpacity onPress={() => handlePressCloseButton()}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                borderWidth: 2,
                borderRadius: 25,
                padding: 10,
                marginTop: 20,
                marginBottom: 10,
                borderColor: '#776677',
                color: '#776677',
                backgroundColor: 'white',
              }}>
              Close
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputRow;
