import React from 'react';
import {View, Text} from 'react-native';
import getUpdateFormStore from '../../stores/UpdateFormStore';
import RadioButtonRow from './RadioButtonInput';
import {booleanval} from '../../constant/constants';
import {observer} from 'mobx-react';

const RadioButtonInput = observer(() => {
  const setRadioButton = (
    booleanstring: React.ChangeEvent<HTMLInputElement>,
    attribute: string,
  ) => {
    if (attribute === 'reveiwed_by_BY') {
      getUpdateFormStore().MyreviewedbyBY.set(booleanstring.toString());
    } else if (attribute === 'reveiwed_by_AH') {
      getUpdateFormStore().MyreviewedbyAH.set(booleanstring.toString());
    } else if (attribute === 'reveiwed_by_HT') {
      getUpdateFormStore().MyreviewedbyHT.set(booleanstring.toString());
    }
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
            ) => setRadioButton(booleanstring, 'reveiwed_by_BY')}
            value={getUpdateFormStore().MyreviewedbyBY.get()}
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
            ) => setRadioButton(booleanstring, 'reveiwed_by_AH')}
            value={getUpdateFormStore().MyreviewedbyAH.get()}
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
            ) => setRadioButton(booleanstring, 'reveiwed_by_HT')}
            value={getUpdateFormStore().MyreviewedbyHT.get()}
          />
        </View>
      </View>
    </View>
  );
});

export default RadioButtonInput;
