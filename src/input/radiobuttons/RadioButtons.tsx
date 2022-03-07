import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import RadioButtonRow from './RadioButtonInput';
import {observer} from 'mobx-react';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';
import getLanguageStore from '../../stores/LanguageStore';

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
            marginLeft: 2,
            marginRight: 2,
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>
            {getLanguageStore().translatedlang.get().byapprove}
          </Text>
          <RadioButtonRow
            key="firstrow"
            getboolean={getLanguageStore().translatedlang.get().booleanval}
            radiobuttonfun={(
              booleanstring: React.ChangeEvent<HTMLInputElement>,
            ) =>
              (getGlobalObjectStore().emptyobject.get().MyreviewedbyBY =
                booleanstring.toString())
            }
            value={getGlobalObjectStore().emptyobject.get().MyreviewedbyBY}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginLeft: 2,
            marginRight: 2,
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>
            {getLanguageStore().translatedlang.get().ahapprove}
          </Text>
          <RadioButtonRow
            key="secondrow"
            getboolean={getLanguageStore().translatedlang.get().booleanval}
            radiobuttonfun={(
              booleanstring: React.ChangeEvent<HTMLInputElement>,
            ) =>
              (getGlobalObjectStore().emptyobject.get().MyreviewedbyAH =
                booleanstring.toString())
            }
            value={getGlobalObjectStore().emptyobject.get().MyreviewedbyAH}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginLeft: 2,
            marginRight: 2,
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>
            {getLanguageStore().translatedlang.get().htapprove}
          </Text>
          <RadioButtonRow
            key="thirdrow"
            getboolean={getLanguageStore().translatedlang.get().booleanval}
            radiobuttonfun={(
              booleanstring: React.ChangeEvent<HTMLInputElement>,
            ) =>
              (getGlobalObjectStore().emptyobject.get().MyreviewedbyHT =
                booleanstring.toString())
            }
            value={getGlobalObjectStore().emptyobject.get().MyreviewedbyHT}
          />
        </View>
      </View>
      <View style={{marginTop: 35}}>
        <Button
          title={getLanguageStore().translatedlang.get().donetext}
          onPress={() => handlePressSubmitButton()}
        />
      </View>
    </View>
  );
});

export default RadioButtonInput;
