import React, {ChangeEvent} from 'react';
import {View, Button} from 'react-native';
import getUpdateFormStore from '../../../../stores/UpdateFormStore';
import SelectInput from '../selectlists/SelectInput';
import {observer} from 'mobx-react';
import getLanguageStore from '../../../../stores/LanguageStore';
import {globalStateObject, windowWidth} from '../../../../constants/constants';

const SSDListInput = observer(() => {
  return (
    <View>
      <View
        style={{
          marginBottom: windowWidth * 0.055,
          marginTop: windowWidth * 0.027,
        }}>
        <SelectInput
          listname={getLanguageStore.get('statustext')}
          arrayval={globalStateObject.StatusList}
          choosedval={getUpdateFormStore().Mystatuslist.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Mystatuslist.set(event.toString())
          }
        />
      </View>
      <View
        style={{
          marginBottom: windowWidth * 0.055,
          marginTop: windowWidth * 0.027,
        }}>
        <SelectInput
          listname={getLanguageStore.get('sizetext')}
          arrayval={globalStateObject.Size}
          choosedval={getUpdateFormStore().Mysize.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Mysize.set(event.toString())
          }
        />
      </View>
      <View
        style={{
          marginBottom: windowWidth * 0.055,
          marginTop: windowWidth * 0.027,
        }}>
        <SelectInput
          listname={getLanguageStore.get('dificulitytext')}
          arrayval={globalStateObject.Dificulity}
          choosedval={getUpdateFormStore().Mydificulity.get()}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getUpdateFormStore().Mydificulity.set(event.toString())
          }
        />
      </View>
      <View style={{marginTop: windowWidth * 0.07}}>
        <Button
          title={getLanguageStore.get('nexttext')}
          onPress={() => getUpdateFormStore().ssdLists()}
        />
      </View>
    </View>
  );
});

export default SSDListInput;
