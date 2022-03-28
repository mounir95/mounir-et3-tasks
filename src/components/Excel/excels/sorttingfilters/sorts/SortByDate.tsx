import React from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {observer} from 'mobx-react';
import getSortFilterStore from '../../../../../stores/SortFilterStore';
import getExcelStore from '../../../../../stores/ExcelStore';
import getLanguageStore from '../../../../../stores/LanguageStore';
import {colors, windowWidth} from '../../../../../constants/constants';

const SortByDate = observer(() => {
  const itemarray = getLanguageStore
    .getArray('arrayofsort')
    .map((item: string) => {
      return {label: item, value: item};
    });

  const setDateSort = (event: React.ChangeEvent) => {
    let value;
    event === null ? (value = null) : (value = event.toString());
    getExcelStore().sortArrayFun(value);
    getSortFilterStore().setDateFun();
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
              paddingRight: windowWidth * 0.083,
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
              paddingRight: windowWidth * 0.083,
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
