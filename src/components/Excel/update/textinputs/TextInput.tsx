import React from 'react';
import {View, Text, Button} from 'react-native';
import getUpdateFormStore from '../../../../stores/UpdateFormStore';
import getRequiredStore from '../../../../stores/RequiredStore';
import TextInputRow from './TextInputRow';
import {observer} from 'mobx-react';
import getLanguageStore from '../../../../stores/LanguageStore';
import {colors, windowWidth} from '../../../../constants/constants';
import {runInAction} from 'mobx';

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
          stringval={getUpdateFormStore().Myreleaseversion.get()}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            runInAction(() => {
              getUpdateFormStore().Myreleaseversion.set(event.toString());
            })
          }
        />
        {/* {console.log(getUpdateFormStore().Myreleaseversion.get())} */}
        {/* {console.log(getRequiredStore().checkUpdateValidation())} */}
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
          stringval={getUpdateFormStore().Mycomment.get()}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            runInAction(() => {
              getUpdateFormStore().Mycomment.set(event.toString());
            })
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
          {getLanguageStore.get('prcount')}
        </Text>
        <TextInputRow
          stringval={getUpdateFormStore().Myprlink.get()}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            runInAction(() => {
              getUpdateFormStore().Myprlink.set(event.toString());
            })
          }
        />
      </View>
      <View style={{marginTop: windowWidth * 0.07}}>
        <Button
          title={getLanguageStore.get('nexttext')}
          onPress={() => getUpdateFormStore().textPage()}
        />
      </View>
    </View>
  );
});

export default InputText;
