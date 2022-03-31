import React, {ChangeEvent} from 'react';
import {View} from 'react-native';
import SelectInput from './SelectInput';
import {observer} from 'mobx-react';
import getGlobalObjectStore from '../../../../stores/GlobalObjectStore';
import getLanguageStore from '../../../../stores/LanguageStore';
import {globalStateObject, windowWidth} from '../../../../constants/constants';
import getAddPageStore from '../../../../stores/AddPageStore';

const InputSelectList = observer(() => {
  return (
    <View>
      <View
        style={{
          marginBottom: windowWidth * 0.055,
          marginTop: windowWidth * 0.027,
        }}>
        <SelectInput
          key="firstrow"
          listname={getLanguageStore.get('setext')}
          arrayval={globalStateObject.SEList}
          choosedval={getGlobalObjectStore().emptyobject.get().Myselist}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getAddPageStore().InputSelFun('setext', event.toString())
          }
        />
      </View>
      <View
        style={{
          marginBottom: windowWidth * 0.055,
          marginTop: windowWidth * 0.027,
        }}>
        <SelectInput
          key="secondrow"
          listname={getLanguageStore.get('platformtext')}
          arrayval={globalStateObject.Platform}
          choosedval={getGlobalObjectStore().emptyobject.get().Myplatform}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            getAddPageStore().InputSelFun('platformtext', event.toString())
          }
        />
      </View>
    </View>
  );
});

export default InputSelectList;
