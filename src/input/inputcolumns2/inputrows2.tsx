import React from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {useState} from 'react';
import {ObjectArray} from '../../../App';
import TextInputRow from './textinputrow';

const InputRowTwo = () => {
  const [{comment, pr_Link, release_version}, setChanges] = useState({
    comment: globalStateContext._currentValue.Comment,
    pr_Link: globalStateContext._currentValue.Pr_Link,
    release_version: globalStateContext._currentValue.Release_Version,
  });

  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    console.log(event)
    if (Atribuite === comment) {
      setChanges(
        val =>
          (val = {
            pr_Link: pr_Link,
            release_version: release_version,
            comment: event,
          }),
      );
    } else if (Atribuite === pr_Link) {
      setChanges(
        val =>
          (val = {
            comment: comment,
            release_version: release_version,
            pr_Link: event,
          }),
      );
    } else if (Atribuite === release_version) {
      setChanges(
        val =>
          (val = {
            comment: comment,
            pr_Link: pr_Link,
            release_version: event,
          }),
      );
    }
  };

  ObjectArray.Mypr_Link = pr_Link;
  ObjectArray.Mycomment = comment;
  ObjectArray.Myrelease_version = release_version;
  return (
    <View>
      <View>
        <Text style={styles.titleofrow}>Release Version</Text>
        <TextInputRow
          stringval={globalStateContext.Release_Version}
          onchangefun={event => onInputchange(event, release_version)}
        />
      </View>
      <View>
        <Text style={styles.titleofrow}>Comment</Text>
        <TextInputRow
          stringval={globalStateContext.Comment}
          onchangefun={event => onInputchange(event, comment)}
        />
      </View>
      <View>
        <Text style={styles.titleofrow}>PR_LINK</Text>
        <TextInputRow
          stringval={globalStateContext.Pr_Link}
          onchangefun={event => onInputchange(event, pr_Link)}
        />
      </View>
      <Text>{release_version}</Text>
      <Text>{comment}</Text>
      <Text>{pr_Link}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleofrow: {
    color: '#776677',
  },
});
export default InputRowTwo;
