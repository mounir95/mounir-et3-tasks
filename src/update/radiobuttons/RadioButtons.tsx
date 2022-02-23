import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {TPrObject} from '../../constants/UseContext';
import {useState} from 'react';
import RadioButtonRow from './RadioButtonInput';
import {booleanval} from '../../constants/UseContext';
import {filter} from 'lodash';
import {Context} from 'vm';

type Props = {
  updatedid: number;
  RadioButtons: Function;
  objectval: TPrObject;
  arrayobjectval: Context;
};
const RadioButtonInput: FC<Props> = ({
  updatedid,
  RadioButtons,
  objectval,
  arrayobjectval,
}) => {
  const arrayval: TPrObject = filter(arrayobjectval, (c: TPrObject) => {
    if (c.Myid === updatedid) {
      return c;
    }
  })[0];

  const [{reveiwed_by_BY, reveiwed_by_AH, reveiwed_by_HT}, setChanges] =
    useState({
      reveiwed_by_BY: arrayval.MyreviewedbyBY,
      reveiwed_by_AH: arrayval.MyreviewedbyAH,
      reveiwed_by_HT: arrayval.MyreviewedbyHT,
    });

  const changeHandle = (
    booleanstring: React.ChangeEvent<HTMLInputElement>,
    attribute: string,
  ): void => {
    if (attribute === 'reveiwed_by_BY') {
      setChanges(
        val =>
          (val = {
            reveiwed_by_AH: reveiwed_by_AH,
            reveiwed_by_HT: reveiwed_by_HT,
            reveiwed_by_BY: booleanstring.toString(),
          }),
      );
    } else if (attribute === 'reveiwed_by_AH') {
      setChanges(
        val =>
          (val = {
            reveiwed_by_HT: reveiwed_by_HT,
            reveiwed_by_BY: reveiwed_by_BY,
            reveiwed_by_AH: booleanstring.toString(),
          }),
      );
    } else if (attribute === 'reveiwed_by_HT') {
      setChanges(
        val =>
          (val = {
            reveiwed_by_BY: reveiwed_by_BY,
            reveiwed_by_AH: reveiwed_by_AH,
            reveiwed_by_HT: booleanstring.toString(),
          }),
      );
    }
  };

  const handlePressSubmitButton = () => {
    objectval.MyreviewedbyBY = reveiwed_by_BY;
    objectval.MyreviewedbyAH = reveiwed_by_AH;
    objectval.MyreviewedbyHT = reveiwed_by_HT;
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
            ) => changeHandle(booleanstring, 'reveiwed_by_BY')}
            value={reveiwed_by_BY}
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
            value={reveiwed_by_AH}
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
            value={reveiwed_by_HT}
          />
        </View>
      </View>
      <View style={{marginTop: 35}}>
        <Button title={'Done'} onPress={() => handlePressSubmitButton()} />
      </View>
    </View>
  );
};

export default RadioButtonInput;
