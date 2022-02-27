import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import RadioButtonRow from './RadioButtonInput';
import {booleanval} from '../../constants/UseContext';
import {observer} from 'mobx-react';
import globalObj from '../../constants/ObjectStore';

type Props = {
  radioButtons: Function;
};
const RadioButtonInput: FC<Props> = observer(({radioButtons}) => {
  const changeHandle = (
    booleanstring: React.ChangeEvent<HTMLInputElement>,
    attribute: string,
  ): void => {
    globalObj.setReveiwwedBy(booleanstring, attribute);
  };

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
            ) => changeHandle(booleanstring, 'reveiwed_by_BY')}
            value={globalObj.emptyobject.MyreviewedbyBY}
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
            ) => changeHandle(booleanstring, 'reveiwed_by_AH')}
            value={globalObj.emptyobject.MyreviewedbyAH}
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
            ) => changeHandle(booleanstring, 'reveiwed_by_HT')}
            value={globalObj.emptyobject.MyreviewedbyHT}
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
