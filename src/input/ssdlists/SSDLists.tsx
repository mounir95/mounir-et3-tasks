import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import {globalStateObject, TPrObject} from '../../constants/UseContext';
import SelectInput from '../selectlists/SelectInput';

type Props = {
  newobjectvalue: TPrObject;
};

const SSDListInput: React.FC<Props> = ({newobjectvalue}) => {
  newobjectvalue.Mysize = globalStateObject.Size[0].toString();
  newobjectvalue.Mydificulity = globalStateObject.Dificulity[0].toString();
  newobjectvalue.Mystatuslist = globalStateObject.StatusList[0].toString();
  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'size') {
      newobjectvalue.Mysize = event.toString();
    } else if (parentData === 'dificulity') {
      newobjectvalue.Mydificulity = event.toString();
    } else if (parentData === 'status_list') {
      newobjectvalue.Mystatuslist = event.toString();
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Status List'}
          arrayval={globalStateObject.StatusList}
          choosedval={globalStateObject.StatusList}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'status_list')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Size'}
          arrayval={globalStateObject.Size}
          choosedval={globalStateObject.Size}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'size')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Dificulity'}
          arrayval={globalStateObject.Dificulity}
          choosedval={globalStateObject.Dificulity}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'dificulity')
          }
        />
      </View>
    </View>
  );
};

export default SSDListInput;
