import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {ObjectArray} from '../../../App';
import FirstColumn from './firstcolumn';

const InputRowOne = () => {
  const [{se_list, platform, release_version}, setChanges] = useState({
    se_list: globalStateContext._currentValue.SE_list,
    platform: globalStateContext._currentValue.Platform,
    release_version: globalStateContext._currentValue.Release_Version,
  });
  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === release_version) {
      setChanges(
        val =>
          (val = {
            se_list: se_list,
            platform: platform,
            release_version: event.target.value,
          }),
      );
    }
  };

  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    console.log(' i am here')
    if (parentData === se_list) {
      setChanges(
        val =>
          (val = {
            platform: platform,
            release_version: release_version,
            se_list: [event.target.value],
          }),
      );
    } else if (parentData === platform) {
      setChanges(
        val =>
          (val = {
            se_list: se_list,
            release_version: release_version,
            platform: [event.target.value],
          }),
      );
    }
  };

  ObjectArray.Myse_list = se_list[0];
  ObjectArray.Myplatform = platform[0];
  ObjectArray.Myrelease_version = release_version;

  return (
    <View>
      <View>
        <Text> SE List : </Text>
        <FirstColumn
          mytest={'mytest'}
          // arrayval={se_list}
          onChoose={(event: any) => outputEvent(event, se_list)}
        />
      </View>
      <globalStateContext.Provider
        value={globalStateContext._currentValue.SE_list}>
        <Text> Platform : </Text>
      </globalStateContext.Provider>
      <globalStateContext.Provider
        value={globalStateContext._currentValue.SE_list}>
        <Text> Release Version : </Text>
      </globalStateContext.Provider>
    </View>
  );
};
export default InputRowOne;
