import React from 'react';
import {View, Text} from 'react-native';
import TextInputRow from './TextInputRow';
import {observer} from 'mobx-react';
import globalObj from '../../constants/ObjectStore';

const InputText = observer(() => {
  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === 'comment') {
      globalObj.emptyobject.Mycomment = event.toString();
    } else if (Atribuite === 'pr_Link') {
      globalObj.emptyobject.Myprlink = event.toString();
    } else if (Atribuite === 'release_version') {
      globalObj.emptyobject.Myreleaseversion = event.toString();
    }
  };

  return (
    <View>
      <View>
        <Text style={{color: '#776677'}}>Release Version</Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'release_version')
          }
        />
      </View>
      <View>
        <Text style={{color: '#776677'}}>Comment</Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'comment')
          }
        />
      </View>
      <View>
        <Text style={{color: '#776677'}}>PR_LINK</Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'pr_Link')
          }
        />
      </View>
    </View>
  );
});
export default InputText;
