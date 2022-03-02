import React from 'react';
import {View, Text} from 'react-native';
import TextInputRow from './TextInputRow';
import {observer} from 'mobx-react';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';
import getRequiredStore from '../../stores/RequiredStore';

const InputText = observer(() => {
  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === 'comment') {
      getGlobalObjectStore().emptyobject.get().Mycomment = event.toString();
    } else if (Atribuite === 'pr_Link') {
      getGlobalObjectStore().emptyobject.get().Myprlink = event.toString();
    } else if (Atribuite === 'release_version') {
      getGlobalObjectStore().emptyobject.get().Myreleaseversion =
        event.toString();
    }
    getRequiredStore().checkInputValidation();
  };

  return (
    <View>
      <View>
        {!getRequiredStore().released.get() && (
          <Text style={{color: 'red'}}>Required</Text>
        )}
        <Text style={{color: '#776677'}}>Release Version</Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'release_version')
          }
        />
      </View>
      <View>
        {!getRequiredStore().comment.get() && (
          <Text style={{color: 'red'}}>Required</Text>
        )}
        <Text style={{color: '#776677'}}>Comment</Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'comment')
          }
        />
      </View>
      <View>
        {!getRequiredStore().prlink.get() && (
          <Text style={{color: 'red'}}>Required</Text>
        )}
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
