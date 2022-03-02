import React, {ChangeEvent} from 'react';
import {View, Button} from 'react-native';
import {globalStateObject} from '../../constant/constants';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import SelectInput from '../selectlists/SelectInput';
import {observer} from 'mobx-react';

const SSDListInput = observer(() => {
  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'size') {
      getUpdateFormStore().Mysize.set(event.toString());
    } else if (parentData === 'dificulity') {
      getUpdateFormStore().Mydificulity.set(event.toString());
    } else if (parentData === 'status_list') {
      getUpdateFormStore().Mystatuslist.set(event.toString());
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Status List'}
          arrayval={globalStateObject.StatusList}
          choosedval={getUpdateFormStore().Mystatuslist.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'status_list')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Size'}
          arrayval={globalStateObject.Size}
          choosedval={getUpdateFormStore().Mysize.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'size')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Dificulity'}
          arrayval={globalStateObject.Dificulity}
          choosedval={getUpdateFormStore().Mydificulity.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'dificulity')
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button
          title={'Next'}
          onPress={() => getUpdateFormStore().ssdLists()}
        />
      </View>
    </View>
  );
});

export default SSDListInput;
