import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import InputRowOneSumit from './inputfirstcolumn/InputFColSubmit';
import InputRowTwoSumit from './inputsecondcolumn/InputSColSubmit';
import InputRowThreeSumit from './inputthirdcolumn/InputTColSubmit';
import InputRowFourSumit from './inputforthcolumn/InputFColSubmit';
import {ObjectArray} from '../../App';
import InputDatePicker from './datepicking/DatePickerSubmit';

type Props = {
  inptformtrue: Boolean;
  inputAdd: Function;
  inputClose: Function;
};

const InputRow: FC<Props> = ({inptformtrue, inputAdd, inputClose}) => {
  let lastIndex: number;
  if (ObjectArray._currentValue.length - 1 <= 0) {
    lastIndex = 0;
  } else {
    lastIndex =
      ObjectArray._currentValue[ObjectArray._currentValue.length - 1].Myid;
  }
  const [
    {id, nextinput1, nextinput2, nextinput3, nextinput4, nextinput5},
    setNext,
  ] = useState({
    id: lastIndex,
    nextinput5: true,
    nextinput1: false,
    nextinput2: false,
    nextinput3: false,
    nextinput4: false,
  });

  const nextFase5 = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          nextinput5: false,
          nextinput1: true,
          nextinput2: false,
          nextinput3: false,
          nextinput4: false,
        }),
    );
  };

  const nextFase1 = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          nextinput5: false,
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
          id: lastIndex,
          nextinput5: false,
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
          id: lastIndex,
          nextinput5: false,
          nextinput1: false,
          nextinput2: false,
          nextinput3: false,
          nextinput4: true,
        }),
    );
  };

  const nextFase4 = () => {
    ObjectArray.Myid = id + 1;
    setNext(
      val =>
        (val = {
          id: lastIndex,
          nextinput5: true,
          nextinput1: false,
          nextinput2: false,
          nextinput3: false,
          nextinput4: false,
        }),
    );
    inputAdd();
  };

  const handlePressCloseButton = () => {
    setNext(
      val =>
        (val = {
          id: lastIndex,
          nextinput5: true,
          nextinput1: false,
          nextinput2: false,
          nextinput3: false,
          nextinput4: false,
        }),
    );
    inputClose();
  };

  return (
    <View>
      {inptformtrue && (
        <View
          style={{
            flexDirection: 'column',
            marginTop: 15,
            marginBottom: 5,
            backgroundColor: '#776677',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <InputDatePicker
            key="firstrow"
            nextinputfive={nextinput5}
            nextFaseFive={() => nextFase5()}
          />
          <InputRowOneSumit
            key="secondrow"
            nextinputone={nextinput1}
            nextFaseOne={() => nextFase1()}
          />
          <InputRowTwoSumit
            key="thirdrow"
            nextinputtwo={nextinput2}
            nextFaseTwo={() => nextFase2()}
          />
          <InputRowThreeSumit
            key="fourthrow"
            nextinputthree={nextinput3}
            nextFaseThree={() => nextFase3()}
          />
          <InputRowFourSumit
            key="fifthrow"
            nextinputfour={nextinput4}
            nextFaseFour={() => nextFase4()}
          />
        </View>
      )}
      {inptformtrue && (
        <TouchableOpacity onPress={() => handlePressCloseButton()}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                borderWidth: 2,
                borderRadius: 25,
                padding: 10,
                marginTop: 10,
                marginBottom: 5,
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
