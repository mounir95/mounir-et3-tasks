import React from 'react';
import {View, Text} from 'react-native';
import TextInputRow from './TextInputRow';
import {observer} from 'mobx-react';
import globalObject from '../../stores/GlobalObjectStore';
import {requiredMobx} from '../../stores/RequiredStore';

const InputText = observer(() => {
  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === 'comment') {
      globalObject.emptyobject.Mycomment = event.toString();
    } else if (Atribuite === 'pr_Link') {
      globalObject.emptyobject.Myprlink = event.toString();
    } else if (Atribuite === 'release_version') {
      globalObject.emptyobject.Myreleaseversion = event.toString();
    }
    requiredMobx.checkInputValidation();
  };

  return (
    <View>
      <View>
        {!requiredMobx.released && <Text style={{color: 'red'}}>Required</Text>}
        <Text style={{color: '#776677'}}>Release Version</Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'release_version')
          }
        />
      </View>
      <View>
        {!requiredMobx.comment && <Text style={{color: 'red'}}>Required</Text>}
        <Text style={{color: '#776677'}}>Comment</Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'comment')
          }
        />
      </View>
      <View>
        {!requiredMobx.prlink && <Text style={{color: 'red'}}>Required</Text>}
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
