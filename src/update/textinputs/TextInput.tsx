import React from 'react';
import {View, Text, Button} from 'react-native';
import {updateFormMobx} from '../../stores/UpdateFormStore'
import {requiredMobx} from '../../stores/RequiredStore';
import TextInputRow from './TextInputRow';
import { observer } from 'mobx-react';

const InputText = () => {
  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === 'comment') {
      updateFormMobx.objectval.Mycomment = event.toString();
    } else if (Atribuite === 'pr_Link') {
      updateFormMobx.objectval.Myprlink = event.toString();
    } else if (Atribuite === 'release_version') {
      updateFormMobx.objectval.Myreleaseversion = event.toString();
    }
  };

  return (
    <View>
      <View>
        {!requiredMobx.released && <Text style={{color: 'red'}}>Required</Text>}
        <Text style={{color: '#776677'}}>Release Version</Text>
        <TextInputRow
          stringval={updateFormMobx.objectval.Myreleaseversion}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'release_version')
          }
        />
      </View>
      <View>
        {!requiredMobx.comment && <Text style={{color: 'red'}}>Required</Text>}
        <Text style={{color: '#776677'}}>Comment</Text>
        <TextInputRow
          stringval={updateFormMobx.objectval.Mycomment}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'comment')
          }
        />
      </View>
      <View>
        {!requiredMobx.prlink && <Text style={{color: 'red'}}>Required</Text>}
        <Text style={{color: '#776677'}}>PR_LINK</Text>
        <TextInputRow
          stringval={updateFormMobx.objectval.Myprlink}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'pr_Link')
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button title={'Next'} onPress={() => updateFormMobx.textPage()} />
      </View>
    </View>
  )
};

export default InputText;
