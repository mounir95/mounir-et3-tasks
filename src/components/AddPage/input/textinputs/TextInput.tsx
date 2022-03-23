import React from 'react';
import {View, Text} from 'react-native';
import TextInputRow from './TextInputRow';
import {observer} from 'mobx-react';
import getGlobalObjectStore from '../../../../stores/GlobalObjectStore';
import getRequiredStore from '../../../../stores/RequiredStore';
import getLanguageStore from '../../../../stores/LanguageStore';
import {colors} from '../../../../constants/constants';
import {runInAction} from 'mobx';

const InputText = observer(() => {
  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    runInAction(() => {
      if (Atribuite === 'comment') {
        getGlobalObjectStore().emptyobject.get().Mycomment = event.toString();
      } else if (Atribuite === 'pr_Link') {
        getGlobalObjectStore().emptyobject.get().Myprlink = event.toString();
      } else if (Atribuite === 'release_version') {
        getGlobalObjectStore().emptyobject.get().Myreleaseversion =
          event.toString();
      }
      getRequiredStore().checkInputValidation();
    });
  };

  return (
    <View>
      <View>
        {!getRequiredStore().released.get() && (
          <Text style={{color: colors.red}}>
            {getLanguageStore.get('required')}
          </Text>
        )}
        <Text style={{color: colors.lightpurple}}>
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
          <Text style={{color: colors.red}}>
            {getLanguageStore.get('required')}
          </Text>
        )}
        <Text style={{color: colors.lightpurple}}>
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
          <Text style={{color: colors.red}}>
            {getLanguageStore.get('required')}
          </Text>
        )}
        <Text style={{color: colors.lightpurple}}>
          {getLanguageStore.get('prlink')}
        </Text>
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
