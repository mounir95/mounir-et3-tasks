import React, {ChangeEvent} from 'react';
import {View, Button} from 'react-native';
import {globalStateObject} from '../../constant/constants';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import SelectInput from '../selectlists/SelectInput';
import {observer} from 'mobx-react';

const SSDListInput = observer(() => {
  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Status List'}
          arrayval={globalStateObject.StatusList}
          choosedval={getUpdateFormStore().Mystatuslist.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Mystatuslist.set(event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Size'}
          arrayval={globalStateObject.Size}
          choosedval={getUpdateFormStore().Mysize.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Mysize.set(event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={'Dificulity'}
          arrayval={globalStateObject.Dificulity}
          choosedval={getUpdateFormStore().Mydificulity.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Mydificulity.set(event.toString())
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
