import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {useState} from 'react';
import {ObjectArray} from '../../../App';
import TextInputRow from './TextInputRow';

type Props = {
  nextfase2: Function
}

const InputRowTwo: FC<Props> = ({nextfase2}) => {
  const [
    {
      comment,
      comment_err,
      pr_Link,
      pr_link_err,
      release_version,
      release_version_err
    },
    setChanges,
  ] = useState({
    comment: globalStateContext._currentValue.Comment,
    pr_Link: globalStateContext._currentValue.Pr_Link,
    release_version: globalStateContext._currentValue.Release_Version,
    comment_err: '',
    pr_link_err: '',
    release_version_err: ''
  })
  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === comment) {
      setChanges(
        val =>
          (val = {
            pr_Link: pr_Link,
            release_version: release_version,
            comment: event,
            pr_link_err: pr_link_err,
            release_version_err: release_version_err,
            comment_err: 'event'
          })
      )
    } else if (Atribuite === pr_Link) {
      setChanges(
        val =>
          (val = {
            comment: comment,
            release_version: release_version,
            pr_Link: event,
            comment_err: comment_err,
            release_version_err: release_version_err,
            pr_link_err: 'event'
          }),
      );;
    } else if (Atribuite === release_version) {
      setChanges(
        val =>
          (val = {
            comment: comment,
            pr_Link: pr_Link,
            release_version: event,
            comment_err: comment_err,
            pr_link_err: pr_link_err,
            release_version_err: 'event'
          })
      );;
    }
  };

  const Validated = () => {
    if (release_version_err !== '') {
      if (comment_err !== '') {
        if (pr_link_err) {
          return true;
        } else {
          return 'Pr Link Required';
        }
      } else {
        return 'Comment Required';
      }
    } else {
      return 'Release Version Required';
    }
  };

  const handlePressSubmitButton = () => {
    if (Validated() === true) {
      ObjectArray.Mypr_Link = pr_Link;
      ObjectArray.Mycomment = comment;
      ObjectArray.Myrelease_version = release_version;
      nextfase2();
    } else {
      console.warn(Validated());
    }
  };

  return (
    <View>
      <View>
        <Text style={{color: '#776677'}}>Release Version</Text>
        <TextInputRow
          key="firstrow"
          stringval={globalStateContext.Release_Version}
          onchangefun={event => onInputchange(event, release_version)}
        />
      </View>
      <View>
        <Text style={{color: '#776677'}}>Comment</Text>
        <TextInputRow
          key="secondrow"
          stringval={globalStateContext.Comment}
          onchangefun={event => onInputchange(event, comment)}
        />
      </View>
      <View>
        <Text style={{color: '#776677'}}>PR_LINK</Text>
        <TextInputRow
          key="thirdrow"
          stringval={globalStateContext.Pr_Link}
          onchangefun={event => onInputchange(event, pr_Link)}
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button title={'Next'} onPress={() => handlePressSubmitButton()} />
      </View>
    </View>
  );
};
export default InputRowTwo;
