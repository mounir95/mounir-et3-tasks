import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {TPrObject} from '../../constants/UseContext';
import TextInputRow from './TextInputRow';
import filter from 'lodash/filter';
import {Context} from 'vm';

type Props = {
  idupdate: number;
  TextPage: Function;
  objectval: TPrObject;
  arrayobjectval: Context;
};

const InputText: FC<Props> = ({
  idupdate,
  TextPage,
  objectval,
  arrayobjectval,
}) => {
  const updatedarray: TPrObject = filter(
    arrayobjectval,
    (c: TPrObject): TPrObject => {
      if (c.Myid === idupdate) {
        return c;
      }
    },
  )[0];

  objectval.Mycomment = updatedarray.Mycomment;
  objectval.Myprlink = updatedarray.Myprlink;
  objectval.Myreleaseversion = updatedarray.Myreleaseversion;

  const onInputchange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    Atribuite: string,
  ): void => {
    if (Atribuite === 'comment') {
      objectval.Mycomment = event.toString();
    } else if (Atribuite === 'pr_Link') {
      objectval.Myprlink = event.toString();
    } else if (Atribuite === 'release_version') {
      objectval.Myreleaseversion = event.toString();
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
