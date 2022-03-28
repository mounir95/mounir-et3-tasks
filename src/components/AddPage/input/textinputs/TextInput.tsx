import React from 'react';
import {View, Text} from 'react-native';
import TextInputRow from './TextInputRow';
import {observer} from 'mobx-react';
import getRequiredStore from '../../../../stores/RequiredStore';
import getLanguageStore from '../../../../stores/LanguageStore';
import {colors} from '../../../../constants/constants';
import getAddPageStore from '../../../../stores/AddPageStore';

const InputText = observer(() => {
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
            getAddPageStore().InputTextFun(event, 'release_version')
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
            getAddPageStore().InputTextFun(event, 'comment')
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
            getAddPageStore().InputTextFun(event, 'pr_Link')
          }
        />
      </View>
    </View>
  );
});
export default InputText;
