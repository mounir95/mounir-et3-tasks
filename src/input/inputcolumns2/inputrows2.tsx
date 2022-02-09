import React from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {useState} from 'react';
import {ObjectArray} from '../../../App';
import TextInputRow from './textinputrow';

const InputRowTwo = () => {
  const [{comment, pr_Link}, setChanges] = useState({
    comment: globalStateContext._currentValue.Comment,
    pr_Link: globalStateContext._currentValue.Pr_Link,
  });

  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === comment) {
      setChanges(
        val => (val = {pr_Link: pr_Link, comment: event.target.value}),
      );
    } else if (Atribuite === pr_Link) {
      setChanges(
        val => (val = {comment: comment, pr_Link: event.target.value}),
      );
    }
  };

  ObjectArray.Mypr_Link = pr_Link;
  ObjectArray.Mycomment = comment;
  return (
    <View>
      <View>
        <Text style={styles.titleofrow}>Comment</Text>
        <TextInputRow
          stringval={'comment'}
          onchangefun={event => onInputchange(event, 'sss')}
        />
      </View>
      <View>
        <Text style={styles.titleofrow}>PR_LINK</Text>
        <TextInputRow
          stringval={'pr_Link'}
          onchangefun={event => onInputchange(event, 'sss')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleofrow: {
    color: '#776677',
  },
})
export default InputRowTwo;
