import React, {FC} from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {ObjectArray} from '../../../App';
import {arrayofsort} from '../../constants/UseContext';
import _ from 'lodash';

type Props = {
  setDate: Function;
};

const SortByDate: FC<Props> = ({setDate}) => {
  const itemarray = arrayofsort.map(item => {
    return {label: item, value: item};
  });

  const setDateSort = (event: React.ChangeEvent) => {
    const datesorting = event.toString() === 'desc' ? 'asc' : 'desc';
    const newobjectarray = _.orderBy(ObjectArray._currentValue, o => o.Mydate, [
      datesorting,
    ]);
    setDate(newobjectarray);
  };

  return (
    <View style={{marginBottom: 20, marginTop: 10}}>
      <Text>Sort By Date: </Text>
      <RNPickerSelect
        style={{
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          },
        }}
        items={itemarray}
        onValueChange={(event: React.ChangeEvent) => setDateSort(event)}
      />
    </View>
  );
};

export default SortByDate;
