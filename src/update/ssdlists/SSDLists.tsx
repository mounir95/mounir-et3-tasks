import React, {ChangeEvent} from 'react';
import {View, Button} from 'react-native';
import {globalStateObject} from '../../constant/constants';
import {updateFormMobx} from '../../stores/UpdateFormStore';
import SelectInput from '../selectlists/SelectInput';
import {observer} from 'mobx-react';

const SSDListInput = observer(() => {
  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'size') {
      updateFormMobx.objectval.Mysize = event.toString();
    } else if (parentData === 'dificulity') {
      updateFormMobx.objectval.Mydificulity = event.toString();
    } else if (parentData === 'status_list') {
      updateFormMobx.objectval.Mystatuslist = event.toString();
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Status List'}
          arrayval={globalStateObject.StatusList}
          choosedval={updateFormMobx.objectval.Mystatuslist}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'status_list')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Size'}
          arrayval={globalStateObject.Size}
          choosedval={updateFormMobx.objectval.Mysize}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'size')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Dificulity'}
          arrayval={globalStateObject.Dificulity}
          choosedval={updateFormMobx.objectval.Mydificulity}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'dificulity')
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button title={'Next'} onPress={() => updateFormMobx.ssdLists()} />
      </View>
    </View>
  );
});

export default SSDListInput;
