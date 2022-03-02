import React from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {arrayofsort, TPrObject} from '../../../constant/constants';
import orderBy from 'lodash/orderBy';
import getGlobalObjectStore from '../../../stores/GlobalObjectStore';
import {observer} from 'mobx-react';
import getSortFilterStore from '../../../stores/SortFilterStore';
import getExcelStore from '../../../stores/ExcelStore';

const SortByDate = observer(() => {
  const itemarray = arrayofsort.map(item => {
    return {label: item, value: item};
  });

  const setDateSort = (event: React.ChangeEvent) => {
    const datesorting = event.toString() === 'desc' ? 'asc' : 'desc';
    const newobjectarray = orderBy(
      getGlobalObjectStore().arrayofobjects.get(),
      (obj: TPrObject) => obj.Mydate,
      [datesorting],
    )
    getSortFilterStore().setDateFun();
    getGlobalObjectStore().arrayofobjects.set(newobjectarray);
    getExcelStore().resetStore();
  };

  return (
    <View style={{marginBottom: 20, marginTop: 10}}>
      <Text>Sort By Date: </Text>
      {getSortFilterStore().dateTrueFalse.get() && (
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
      {!getSortFilterStore().dateTrueFalse.get() && (
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
});

export default SortByDate;
