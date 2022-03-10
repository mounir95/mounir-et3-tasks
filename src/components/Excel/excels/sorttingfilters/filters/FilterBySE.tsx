import React, {FC} from 'react';
import {Text, View} from 'react-native';
import RNPicker from 'react-native-picker-select';
import {observer} from 'mobx-react';
import getLanguageStore from '../../../../../stores/LanguageStore';
import {
  colors,
  globalStateObject,
  windowWidth,
} from '../../../../../constants/constants';

type Props = {
  seListFilter: Function;
  filterchoosed: Boolean;
};

const FilterBySE: FC<Props> = observer(({seListFilter, filterchoosed}) => {
  const arraymap = globalStateObject.SEList.map((e: string) => {
    return {label: e, value: e};
  });

  return (
    <View>
      <Text>{getLanguageStore.get('searchbyse')}</Text>
      {filterchoosed && (
        <RNPicker
          items={arraymap}
          onValueChange={(event: React.ChangeEvent) => seListFilter(event)}
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
        />
      )}
      {!filterchoosed && (
        <RNPicker
          items={arraymap}
          onValueChange={(event: React.ChangeEvent) => seListFilter(event)}
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
        />
      )}
    </View>
  );
});

export default FilterBySE;
