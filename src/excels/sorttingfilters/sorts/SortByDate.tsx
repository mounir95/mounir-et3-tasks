import React, {FC} from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {arrayofsort, TPrObject} from '../../../constants/UseContext';
import orderBy from 'lodash/orderBy';

type Props = {
  setDate: Function;
  choosedfilter: Boolean;
  arrayobject: TPrObject[];
};

const SortByDate: FC<Props> = ({setDate, choosedfilter, arrayobject}) => {
  const itemarray = arrayofsort.map(item => {
    return {label: item, value: item};
  });

  const setDateSort = (event: React.ChangeEvent) => {
    const datesorting = event.toString() === 'desc' ? 'asc' : 'desc';
    const newobjectarray = orderBy(
      arrayobject,
      (obj: TPrObject) => obj.Mydate,
      [datesorting],
    )
    setDate(newobjectarray);
  };

  return (
    <View style={{marginBottom: 20, marginTop: 10}}>
      <Text>Sort By Date: </Text>
      {choosedfilter && (
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
      )}
      {!choosedfilter && (
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
      )}
    </View>
  );
};

export default SortByDate;
