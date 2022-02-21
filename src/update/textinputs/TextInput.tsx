import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {TPrObject} from '../../constants/UseContext';
import {ObjectArray} from '../../components/ADDPage';
import TextInputRow from './TextInputRow';
import filter from 'lodash/filter';

type Props = {
  idupdate: number;
  TextPage: Function;
};

const InputText: FC<Props> = ({idupdate, TextPage}) => {
  const updatedarray = filter(ObjectArray._currentValue, (c: TPrObject) => {
    if (c.Myid === idupdate) {
      return c;
    }
  })[0];

  ObjectArray.Mycomment = updatedarray.Mycomment;
  ObjectArray.Myprlink = updatedarray.Myprlink;
  ObjectArray.Myreleaseversion = updatedarray.Myreleaseversion;

  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === 'comment') {
      ObjectArray.Mycomment = event;
    } else if (Atribuite === 'pr_Link') {
      ObjectArray.Myprlink = event;
    } else if (Atribuite === 'release_version') {
      ObjectArray.Myreleaseversion = event;
    }
  };

  const handlePressSubmitButton = () => {
    TextPage();
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
        <Button title={'Next'} onPress={() => handlePressSubmitButton()} />
      </View>
    </View>
  );
};
export default InputText;
