import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import RadioButtonRow from './RadioButtonInput';
import {booleanval} from '../../constant/constants';
import {observer} from 'mobx-react';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';

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
          <Text style={{fontSize: 15, fontWeight: '700'}}>BY Approve:</Text>
          <RadioButtonRow
            key="firstrow"
            getboolean={booleanval}
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
          <Text style={{fontSize: 15, fontWeight: '700'}}>AH Approve:</Text>
          <RadioButtonRow
            key="secondrow"
            getboolean={booleanval}
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
          <Text style={{fontSize: 15, fontWeight: '700'}}>HT Approve:</Text>
          <RadioButtonRow
            key="thirdrow"
            getboolean={booleanval}
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
        <Button title={'Done'} onPress={() => handlePressSubmitButton()} />
      </View>
    </View>
  );
});

export default RadioButtonInput;
