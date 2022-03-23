import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import RadioButtonRow from './RadioButtonInput';
import {observer} from 'mobx-react';
import getGlobalObjectStore from '../../../../stores/GlobalObjectStore';
import getLanguageStore from '../../../../stores/LanguageStore';
import {booleanval, windowWidth} from '../../../../constants/constants';
import {runInAction} from 'mobx';

type Props = {
  radioButtons: Function;
};
const RadioButtonInput: FC<Props> = observer(({radioButtons}) => {
  const handlePressSubmitButton = () => {
    radioButtons();
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginLeft: windowWidth * 0.006,
            marginRight: windowWidth * 0.006,
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Text style={{fontSize: windowWidth * 0.041, fontWeight: '700'}}>
            {getLanguageStore.get('byapprove')}
          </Text>
          <RadioButtonRow
            key="firstrow"
            getboolean={booleanval}
            radiobuttonfun={(
              booleanstring: React.ChangeEvent<HTMLInputElement>,
            ) =>
              runInAction(() => {
                getGlobalObjectStore().emptyobject.get().MyreviewedbyBY =
                  booleanstring.toString();
              })
            }
            value={getGlobalObjectStore().emptyobject.get().MyreviewedbyBY}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginLeft: windowWidth * 0.006,
            marginRight: windowWidth * 0.006,
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Text style={{fontSize: windowWidth * 0.041, fontWeight: '700'}}>
            {getLanguageStore.get('ahapprove')}
          </Text>
          <RadioButtonRow
            key="secondrow"
            getboolean={booleanval}
            radiobuttonfun={(
              booleanstring: React.ChangeEvent<HTMLInputElement>,
            ) =>
              runInAction(() => {
                getGlobalObjectStore().emptyobject.get().MyreviewedbyAH =
                  booleanstring.toString();
              })
            }
            value={getGlobalObjectStore().emptyobject.get().MyreviewedbyAH}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginLeft: windowWidth * 0.006,
            marginRight: windowWidth * 0.006,
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Text style={{fontSize: windowWidth * 0.041, fontWeight: '700'}}>
            {getLanguageStore.get('htapprove')}
          </Text>
          <RadioButtonRow
            key="thirdrow"
            getboolean={booleanval}
            radiobuttonfun={(
              booleanstring: React.ChangeEvent<HTMLInputElement>,
            ) =>
              runInAction(() => {
                getGlobalObjectStore().emptyobject.get().MyreviewedbyHT =
                  booleanstring.toString();
              })
            }
            value={getGlobalObjectStore().emptyobject.get().MyreviewedbyHT}
          />
        </View>
      </View>
      <View style={{marginTop: windowWidth * 0.097}}>
        <Button
          title={getLanguageStore.get('donetext')}
          onPress={() => handlePressSubmitButton()}
        />
      </View>
    </View>
  );
});

export default RadioButtonInput;
