import React, {ChangeEvent} from 'react';
import {View, Button} from 'react-native';
import {globalStateObject} from '../../constant/constants';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import SelectInput from './SelectInput';
import {observer} from 'mobx-react';

const InputSelectList = observer(() => {
  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="firstrow"
          listname={'SE List'}
          arrayval={globalStateObject.SEList}
          choosedval={getUpdateFormStore().Myselist.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Myselist.set(event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="secondrow"
          listname={'Platform'}
          arrayval={globalStateObject.Platform}
          choosedval={getUpdateFormStore().Myplatform.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Myplatform.set(event.toString())
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button
          title={'Next'}
          onPress={() => getUpdateFormStore().selectList()}
        />
      </View>
    </View>
  );
});

export default InputSelectList;
