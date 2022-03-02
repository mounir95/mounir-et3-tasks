import React from 'react';
import {View, Text, Button} from 'react-native';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import getRequiredStore from '../../stores/RequiredStore';
import TextInputRow from './TextInputRow';
import {observer} from 'mobx-react';

const InputText = observer(() => {
  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === 'comment') {
      getUpdateFormStore().Mycomment.set(event.toString());
    } else if (Atribuite === 'pr_Link') {
      getUpdateFormStore().Myprlink.set(event.toString());
    } else if (Atribuite === 'release_version') {
      getUpdateFormStore().Myreleaseversion.set(event.toString());
    }
  };

  return (
    <View>
      <View>
        {!getRequiredStore().released.get() && (
          <Text style={{color: 'red'}}>Required</Text>
        )}
        <Text style={{color: '#776677'}}>Release Version</Text>
        <TextInputRow
          stringval={getUpdateFormStore().Myreleaseversion.get()}
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
          stringval={getUpdateFormStore().Mycomment.get()}
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
          stringval={getUpdateFormStore().Myprlink.get()}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'pr_Link')
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button
          title={'Next'}
          onPress={() => getUpdateFormStore().textPage()}
        />
      </View>
    </View>
  );
});

export default InputText;
