import React from 'react';
import {View, Text, Button} from 'react-native';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import getRequiredStore from '../../stores/RequiredStore';
import TextInputRow from './TextInputRow';
import {observer} from 'mobx-react';
import getLanguageStore from '../../stores/LanguageStore';

const InputText = observer(() => {
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
          stringval={getUpdateFormStore().Myreleaseversion.get()}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Myreleaseversion.set(event.toString())
          }
        />
        {console.log(getUpdateFormStore().Myreleaseversion.get())}
        {console.log(getRequiredStore().checkUpdateValidation())}
      </View>
      <View>
        {!getRequiredStore().comment.get() && (
          <Text style={{color: 'red'}}>{getLanguageStore.get('required')}</Text>
        )}
        <Text style={{color: '#776677'}}>
          {getLanguageStore.get('comment')}
        </Text>
        <TextInputRow
          stringval={getUpdateFormStore().Mycomment.get()}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Mycomment.set(event.toString())
          }
        />
      </View>
      <View>
        {!getRequiredStore().prlink.get() && (
          <Text style={{color: 'red'}}>{getLanguageStore.get('required')}</Text>
        )}
        <Text style={{color: '#776677'}}>
          {getLanguageStore.get('prcount')}
        </Text>
        <TextInputRow
          stringval={getUpdateFormStore().Myprlink.get()}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Myprlink.set(event.toString())
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button
          title={getLanguageStore.get('nexttext')}
          onPress={() => getUpdateFormStore().textPage()}
        />
      </View>
    </View>
  );
});

export default InputText;
