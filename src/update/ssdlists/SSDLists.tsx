import React, {ChangeEvent} from 'react';
import {View, Button} from 'react-native';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import SelectInput from '../selectlists/SelectInput';
import {observer} from 'mobx-react';
import getLanguageStore from '../../stores/LanguageStore';

const SSDListInput = observer(() => {
  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={getLanguageStore().translatedlang.get().statustext}
          arrayval={
            getLanguageStore().translatedlang.get().globalStateObject.StatusList
          }
          choosedval={getUpdateFormStore().Mystatuslist.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Mystatuslist.set(event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={getLanguageStore().translatedlang.get().sizetext}
          arrayval={
            getLanguageStore().translatedlang.get().globalStateObject.Size
          }
          choosedval={getUpdateFormStore().Mysize.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Mysize.set(event.toString())
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          listname={getLanguageStore().translatedlang.get().dificulitytext}
          arrayval={
            getLanguageStore().translatedlang.get().globalStateObject.Dificulity
          }
          choosedval={getUpdateFormStore().Mydificulity.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Mydificulity.set(event.toString())
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button
          title={getLanguageStore().translatedlang.get().nexttext}
          onPress={() => getUpdateFormStore().ssdLists()}
        />
      </View>
    </View>
  );
});

export default SSDListInput;
