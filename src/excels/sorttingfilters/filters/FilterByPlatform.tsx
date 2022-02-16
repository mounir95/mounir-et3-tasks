import React, {FC} from 'react';
import {Text, View} from 'react-native';
import RNPicker from 'react-native-picker-select';
import {globalStateContext} from '../../../constants/UseContext';

type Props = {
  platformFilter: Function;
  filterchoosed: Boolean;
};

const FilterByPlatform: FC<Props> = ({platformFilter, filterchoosed}) => {
  const arraymap = globalStateContext._currentValue.Platform.map(
    (e: string) => {
      return {label: e, value: e};
    },
  );

  return (
    <View>
      <Text>Platform Filter: </Text>
      {filterchoosed && (
        <RNPicker
          items={arraymap}
          onValueChange={(event: React.ChangeEvent) => platformFilter(event)}
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
        />
      )}
      {!filterchoosed && (
        <RNPicker
          items={arraymap}
          onValueChange={(event: React.ChangeEvent) => platformFilter(event)}
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
        />
      )}
    </View>
  );
};

export default FilterByPlatform;
