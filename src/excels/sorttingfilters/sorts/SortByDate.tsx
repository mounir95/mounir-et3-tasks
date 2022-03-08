import React from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {TPrObject} from '../../../interfaces/interfaces';
import orderBy from 'lodash/orderBy';
import getGlobalObjectStore from '../../../stores/GlobalObjectStore';
import {observer} from 'mobx-react';
import getSortFilterStore from '../../../stores/SortFilterStore';
import getExcelStore from '../../../stores/ExcelStore';
import getLanguageStore from '../../../stores/LanguageStore';

const SortByDate = observer(() => {
  const itemarray = getLanguageStore.get('arrayofsort').map((item: string) => {
    return {label: item, value: item};
  });

  const setDateSort = (event: React.ChangeEvent) => {
    let newobjectarray;
    if (event.toString() === 'تنازلي' || event.toString() === 'desc') {
      let x = 'desc';
      newobjectarray = orderBy(
        getGlobalObjectStore().arrayofobjects.get(),
        (obj: TPrObject) => obj.Mydate,
        [x === 'desc' ? 'desc' : 'asc'],
      );
    } else {
      let x = 'asc';
      newobjectarray = orderBy(
        getGlobalObjectStore().arrayofobjects.get(),
        (obj: TPrObject) => obj.Mydate,
        [x === 'asc' ? 'asc' : 'desc'],
      );
    }
    getSortFilterStore().setDateFun();
    getGlobalObjectStore().arrayofobjects.set(newobjectarray);
    getExcelStore().resetStore();
  };

  return (
    <View style={{marginBottom: 20, marginTop: 10}}>
      <Text>{getLanguageStore.get('sortbydate')}</Text>
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
