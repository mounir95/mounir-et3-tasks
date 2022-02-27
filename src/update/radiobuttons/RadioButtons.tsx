import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {ExcelMobx, TPrObject, UpdateFormMobx} from '../../constants/UseContext';
import RadioButtonRow from './RadioButtonInput';
import {booleanval} from '../../constants/UseContext';
import {filter} from 'lodash';
import globalObj from '../../constants/ObjectStore';
import {observer} from 'mobx-react';

type Props = {
  RadioButtons: Function;
};
const RadioButtonInput: FC<Props> = observer(({RadioButtons}) => {
  const updatedarray: any = filter(globalObj.arrayofobjects, (c: TPrObject) => {
    if (c.Myid === ExcelMobx.id) {
      return c;
    }
  })[0];

  const setRadioButton = (
    booleanstring: React.ChangeEvent<HTMLInputElement>,
    attribute: string,
  ) => {
    if (attribute === 'reveiwed_by_BY') {
      UpdateFormMobx.objectval.MyreviewedbyBY = booleanstring.toString();
      updatedarray.MyreviewedbyBY = booleanstring.toString();
    } else if (attribute === 'reveiwed_by_AH') {
      UpdateFormMobx.objectval.MyreviewedbyAH = booleanstring.toString();
      updatedarray.MyreviewedbyAH = booleanstring.toString();
    } else if (attribute === 'reveiwed_by_HT') {
      UpdateFormMobx.objectval.MyreviewedbyHT = booleanstring.toString();
      updatedarray.MyreviewedbyHT = booleanstring.toString();
    }
  };

  const handlePressSubmitButton = () => {
    RadioButtons();
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
            value={updatedarray.MyreviewedbyBY}
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
            value={updatedarray.MyreviewedbyAH}
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
            value={updatedarray.MyreviewedbyHT}
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
