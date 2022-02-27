import React, {ChangeEvent} from 'react';
import {View, Button} from 'react-native';
import {
  ExcelMobx,
  globalStateObject,
  TPrObject,
  UpdateFormMobx,
} from '../../constants/UseContext';
import SelectInput from '../selectlists/SelectInput';
import filter from 'lodash/filter';
import globalObj from '../../constants/ObjectStore';
import {observer} from 'mobx-react';

const SSDListInput = observer(() => {
  const updatedarray: any = filter(
    globalObj.arrayofobjects,
    (c: TPrObject): TPrObject => {
      if (c.Myid === ExcelMobx.id) {
        return c;
      }
    },
  )[0];

  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'size') {
      UpdateFormMobx.objectval.Mysize = event.toString();
      updatedarray.Mysize = event.toString();
    } else if (parentData === 'dificulity') {
      UpdateFormMobx.objectval.Mydificulity = event.toString();
      updatedarray.Mydificulity = event.toString();
    } else if (parentData === 'status_list') {
      UpdateFormMobx.objectval.Mystatuslist = event.toString();
      updatedarray.Mystatuslist = event.toString();
    }
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
        <Button title={'Next'} onPress={() => UpdateFormMobx.ssdLists()} />
      </View>
    </View>
  );
});

export default SSDListInput;
