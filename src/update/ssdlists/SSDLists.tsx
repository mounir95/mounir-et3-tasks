import React, {FC, ChangeEvent} from 'react';
import {View, Button} from 'react-native';
import {globalStateObject, TPrObject} from '../../constants/UseContext';
import SelectInput from '../selectlists/SelectInput';
import filter from 'lodash/filter';
import {Context} from 'vm';

type Props = {
  updatedid: number;
  SSDLists: Function;
  objectval: TPrObject;
  arrayobjectval: Context;
};
const SSDListInput: FC<Props> = ({
  updatedid,
  SSDLists,
  objectval,
  arrayobjectval,
}) => {
  const updatedarray: TPrObject = filter(arrayobjectval, (c: TPrObject) => {
    if (c.Myid === updatedid) {
      return c;
    }
  })[0];

  objectval.Mysize = updatedarray.Mysize;
  objectval.Mydificulity = updatedarray.Mydificulity;
  objectval.Mystatuslist = updatedarray.Mystatuslist;

  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'size') {
      objectval.Mysize = event.toString();
    } else if (parentData === 'dificulity') {
      objectval.Mydificulity = event.toString();
    } else if (parentData === 'status_list') {
      objectval.Mystatuslist = event.toString();
    }
  };

  const handlePressSubmitButton = () => {
    SSDLists();
  };
  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Status List'}
          arrayval={globalStateObject.StatusList}
          choosedval={updatedarray.Mystatuslist}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'status_list')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Size'}
          arrayval={globalStateObject.Size}
          choosedval={updatedarray.Mysize}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'size')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Dificulity'}
          arrayval={globalStateObject.Dificulity}
          choosedval={updatedarray.Mydificulity}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'dificulity')
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button title={'Next'} onPress={() => handlePressSubmitButton()} />
      </View>
    </View>
  );
};

export default SSDListInput;
