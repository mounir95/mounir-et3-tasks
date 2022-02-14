import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import InputRowOneSumit from './inputfirstcolumn/InputFColSubmit';
import InputRowTwoSumit from './inputsecondcolumn/InputSColSubmit';
import InputRowThreeSumit from './inputthirdcolumn/InputTColSubmit';
import InputRowFourSumit from './inputforthcolumn/InputFColSubmit';
import {ObjectArray} from '../../App';
import InputDatePicker from './datepicking/DatePickerSubmit';
import {Context} from 'vm';

type Props = {
  inputUpdate: Function;
  inputClose: Function;
  updatedid: number;
  inputupdateformtrue: Boolean;
};

const UpdateRow: FC<Props> = ({
  inputUpdate,
  inputClose,
  updatedid,
  inputupdateformtrue,
}) => {
  const [
    {id, nextinput1, nextinput2, nextinput3, nextinput4, nextinput5},
    setNext,
  ] = useState({
    id: updatedid,
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
          id: updatedid,
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
          id: updatedid,
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
          id: updatedid,
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
          id: updatedid,
          nextinput5: false,
          nextinput1: false,
          nextinput2: false,
          nextinput3: false,
          nextinput4: true,
        }),
    );
  };

  const nextFase4 = () => {
    ObjectArray._currentValue.map((e: Context) => {
      if (e.Myid === id) {
        e.Myid = id;
        e.Myse_list = ObjectArray.Myse_list;
        e.Myplatform = ObjectArray.Myplatform;
        e.Myrelease_version = ObjectArray.Myrelease_version;
        e.Mystatus_list = ObjectArray.Mystatus_list;
        e.Mysize = ObjectArray.Mysize;
        e.Mydificulity = ObjectArray.Mydificulity;
        e.Mypr_Link = ObjectArray.Mypr_Link;
        e.Mycomment = ObjectArray.Mycomment;
        e.Myreveiwed_by_BY = ObjectArray.Myreveiwed_by_BY;
        e.Myreveiwed_by_AH = ObjectArray.Myreveiwed_by_AH;
        e.Myreveiwed_by_HT = ObjectArray.Myreveiwed_by_HT;
      }
    });
    setNext(
      val =>
        (val = {
          id: updatedid,
          nextinput5: true,
          nextinput1: false,
          nextinput2: false,
          nextinput3: false,
          nextinput4: false,
        }),
    );
    inputUpdate();
  };

    const handlePressCloseButton = () => {
    setNext(
      val =>
        (val = {
          id: updatedid,
          nextinput5: true,
          nextinput1: false,
          nextinput2: false,
          nextinput3: false,
          nextinput4: false
        }),
    );
    inputClose();
  };

  return (
    <View>
      {inputupdateformtrue && (
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
            nextinputfive={nextinput5}
            nextFaseFive={() => nextFase5()}
          />
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
      {inputupdateformtrue && (
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

export default UpdateRow;
