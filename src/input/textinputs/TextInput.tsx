import React from 'react';
import {View, Text} from 'react-native';
import {TPrObject} from '../../constants/UseContext';
import TextInputRow from './TextInputRow';

type Props = {
  newobjectvalue: TPrObject;
};

const InputText: React.FC<Props> = ({newobjectvalue}) => {
  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === 'comment') {
      newobjectvalue.Mycomment = event.toString();
    } else if (Atribuite === 'pr_Link') {
      newobjectvalue.Myprlink = event.toString();
    } else if (Atribuite === 'release_version') {
      newobjectvalue.Myreleaseversion = event.toString();
    }
  };

  return (
    <View>
      <View>
        <Text style={{color: '#776677'}}>Release Version</Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'release_version')
          }
        />
      </View>
      <View>
        <Text style={{color: '#776677'}}>Comment</Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'comment')
          }
        />
      </View>
      <View>
        <Text style={{color: '#776677'}}>PR_LINK</Text>
        <TextInputRow
          onchangefun={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onInputchange(event, 'pr_Link')
          }
        />
      </View>
    </View>
  );
};
export default InputText;
