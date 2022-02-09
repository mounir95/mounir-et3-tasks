import React from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {useState} from 'react';
import {ObjectArray} from '../../../App';
import FirstColumn from '../inputcolumns1/firstcolumn';

const InputRowThree = () => {
  const [{size, dificulity, status_list}, setChanges] = useState({
    size: globalStateContext._currentValue.Size,
    dificulity: globalStateContext._currentValue.Dificulity,
    status_list: globalStateContext._currentValue.Status_list,
  });

  const changeList = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setChanges(
      val =>
        (val = {
          size: size,
          dificulity: dificulity,
          status_list: [event.target.value],
        }),
    );
  };

  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === size) {
      setChanges(
        val =>
          (val = {
            dificulity: dificulity,
            status_list: status_list,
            size: [event.target.value],
          }),
      );
    } else if (parentData === dificulity) {
      setChanges(
        val =>
          (val = {
            size: size,
            status_list: status_list,
            dificulity: [event.target.value],
          }),
      );
    }
  };

  ObjectArray.Mystatus_list = status_list[0];
  ObjectArray.Mysize = size[0];
  ObjectArray.Mydificulity = dificulity[0];

  return (
    <View>
      <View>
        <Text>c</Text>
        <FirstColumn
          mytest={'mytest'}
          // arrayval={se_list}
          onChoose={(event: any) => outputEvent(event, size)}
        />
      </View>
      <View>
        <Text>c</Text>
        <FirstColumn
          mytest={'mytest'}
          // arrayval={se_list}
          onChoose={(event: any) => outputEvent(event, size)}
        />
      </View>
      <View>
        <Text>c</Text>
        <FirstColumn
          mytest={'mytest'}
          // arrayval={se_list}
          onChoose={(event: any) => outputEvent(event, size)}
        />
      </View>
    </View>
  );
};
export default InputRowThree;
