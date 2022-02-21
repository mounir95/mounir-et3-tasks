import React from 'react';
import {View, Text} from 'react-native';
import {globalStateContext} from '../../constants/UseContext';
import {ObjectArray} from '../../components/ADDPage';
import TextInputRow from './TextInputRow';

const InputText = () => {
  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === 'comment') {
      ObjectArray.Mycomment = event;
    } else if (Atribuite === 'pr_Link') {
      ObjectArray.Myprlink = event;
    } else if (Atribuite === 'release_version') {
      ObjectArray.Myreleaseversion = event;
    }
  };

  return (
    <View>
      <View>
        <Text style={{color: '#776677'}}>Release Version</Text>
        <TextInputRow
          stringval={globalStateContext.ReleaseVersion}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'release_version')
          }
        />
      </View>
      <View>
        <Text style={{color: '#776677'}}>Comment</Text>
        <TextInputRow
          stringval={globalStateContext.Comment}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'comment')
          }
        />
      </View>
      <View>
        <Text style={{color: '#776677'}}>PR_LINK</Text>
        <TextInputRow
          stringval={globalStateContext.PrLink}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'pr_Link')
          }
        />
      </View>
    </View>
  );
};
export default InputText;
