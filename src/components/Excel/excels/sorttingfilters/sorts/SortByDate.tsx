import React from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import orderBy from 'lodash/orderBy';
import getGlobalObjectStore from '../../../../../stores/GlobalObjectStore';
import {observer} from 'mobx-react';
import getSortFilterStore from '../../../../../stores/SortFilterStore';
import getExcelStore from '../../../../../stores/ExcelStore';
import getLanguageStore from '../../../../../stores/LanguageStore';
import {colors, windowWidth} from '../../../../../constants/constants';
import {TSQLObject} from '../../../../../interfaces/interfaces';

const SortByDate = observer(() => {
  const itemarray = getLanguageStore.get('arrayofsort').map((item: string) => {
    return {label: item, value: item};
  });

  const setDateSort = (event: React.ChangeEvent) => {
    let newobjectarray;
    let value;
    event === null ? (value = event) : (value = event.toString());
    if (getLanguageStore.get('desc') === value) {
      let x = 'desc';
      newobjectarray = orderBy(
        getGlobalObjectStore().arrayofobjects.get(),
        (obj: TSQLObject) => obj.date,
        [x === 'desc' ? 'desc' : 'asc'],
      );
    } else {
      let x = 'asc';
      newobjectarray = orderBy(
        getGlobalObjectStore().arrayofobjects.get(),
        (obj: TSQLObject) => obj.date,
        [x === 'asc' ? 'asc' : 'desc'],
      );
    }
    getSortFilterStore().setDateFun();
    getGlobalObjectStore().arrayofobjects.set(newobjectarray);
    getExcelStore().resetStore();
  };

  return (
    <View
      style={{
        marginBottom: windowWidth * 0.055,
        marginTop: windowWidth * 0.027,
      }}>
      <Text>{getLanguageStore.get('sortbydate')}</Text>
      {getSortFilterStore().dateTrueFalse.get() && (
        <RNPickerSelect
          style={{
            inputAndroid: {
              fontSize: 16,
              paddingHorizontal: windowWidth * 0.03,
              paddingVertical: windowWidth * 0.03,
              borderWidth: windowWidth * 0.0013,
              borderColor: colors.purple,
              borderRadius: windowWidth * 0.022,
              color: colors.black,
              paddingRight: windowWidth * 0.083, // to ensure the text is never behind the icon
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
              paddingHorizontal: windowWidth * 0.03,
              paddingVertical: windowWidth * 0.03,
              borderWidth: windowWidth * 0.0013,
              borderColor: colors.purple,
              borderRadius: windowWidth * 0.022,
              color: colors.black,
              paddingRight: windowWidth * 0.083, // to ensure the text is never behind the icon
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
