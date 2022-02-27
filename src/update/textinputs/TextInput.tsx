import React from 'react';
import {View, Text, Button} from 'react-native';
import {ExcelMobx, TPrObject, UpdateFormMobx} from '../../constants/UseContext';
import TextInputRow from './TextInputRow';
import filter from 'lodash/filter';
import globalObj from '../../constants/ObjectStore';
import {observer} from 'mobx-react';

const InputText = observer(() => {
  const updatedarray: any = filter(
    globalObj.arrayofobjects,
    (c: TPrObject): TPrObject => {
      if (c.Myid === ExcelMobx.id) {
        return c;
      }
    },
  )[0];

  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === 'comment') {
      UpdateFormMobx.objectval.Mycomment = event.toString();
      updatedarray.Mycomment = event.toString();
    } else if (Atribuite === 'pr_Link') {
      UpdateFormMobx.objectval.Myprlink = event.toString();
      updatedarray.Myprlink = event.toString();
    } else if (Atribuite === 'release_version') {
      UpdateFormMobx.objectval.Myreleaseversion = event.toString();
      updatedarray.Myreleaseversion = event.toString();
    }
  };

  return (
    <View>
      <View>
        <Text style={{color: '#776677'}}>Release Version</Text>
        <TextInputRow
          stringval={updatedarray.Myreleaseversion}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'release_version')
          }
        />
      </View>
      <View>
        <Text style={{color: '#776677'}}>Comment</Text>
        <TextInputRow
          stringval={updatedarray.Mycomment}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'comment')
          }
        />
      </View>
      <View>
        <Text style={{color: '#776677'}}>PR_LINK</Text>
        <TextInputRow
          stringval={updatedarray.Myprlink}
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'pr_Link')
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button title={'Next'} onPress={() => UpdateFormMobx.textPage()} />
      </View>
    </View>
  );
});

export default InputText;
