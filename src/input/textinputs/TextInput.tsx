import React from 'react';
import {View, Text} from 'react-native';
import TextInputRow from './TextInputRow';
import {observer} from 'mobx-react';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';
import getRequiredStore from '../../stores/RequiredStore';
import getLanguageStore from '../../stores/LanguageStore';

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
          <Text style={{color: 'red'}}>{getLanguageStore.get('required')}</Text>
        )}
        <Text style={{color: '#776677'}}>
          {getLanguageStore.get('releaseversion')}
        </Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'release_version')
          }
        />
      </View>
      <View>
        {!getRequiredStore().comment.get() && (
          <Text style={{color: 'red'}}>{getLanguageStore.get('required')}</Text>
        )}
        <Text style={{color: '#776677'}}>
          {getLanguageStore.get('comment')}
        </Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'comment')
          }
        />
      </View>
      <View>
        {!getRequiredStore().prlink.get() && (
          <Text style={{color: 'red'}}>{getLanguageStore.get('required')}</Text>
        )}
        <Text style={{color: '#776677'}}>{getLanguageStore.get('prlink')}</Text>
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
