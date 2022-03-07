import React, {ChangeEvent} from 'react';
import {View, Button} from 'react-native';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import SelectInput from './SelectInput';
import {observer} from 'mobx-react';
import getLanguageStore from '../../stores/LanguageStore';

const InputSelectList = observer(() => {
  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="firstrow"
          listname={getLanguageStore().translatedlang.get().setext}
          arrayval={
            getLanguageStore().translatedlang.get().globalStateObject.SEList
          }
          choosedval={getUpdateFormStore().Myselist.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Myselist.set(event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="secondrow"
          listname={getLanguageStore().translatedlang.get().platformtext}
          arrayval={
            getLanguageStore().translatedlang.get().globalStateObject.Platform
          }
          choosedval={getUpdateFormStore().Myplatform.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Myplatform.set(event.toString())
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button
          title={getLanguageStore().translatedlang.get().nexttext}
          onPress={() => getUpdateFormStore().selectList()}
        />
      </View>
    </View>
  );
});

export default InputSelectList;
