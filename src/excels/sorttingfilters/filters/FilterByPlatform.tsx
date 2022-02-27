import React, {FC} from 'react';
import {Text, View} from 'react-native';
import RNPicker from 'react-native-picker-select';
import {globalStateObject} from '../../../constants/UseContext';
import {observer} from 'mobx-react';

type Props = {
  platformFilter: Function;
  filterchoosed: Boolean;
};

const FilterByPlatform: FC<Props> = observer(
  ({platformFilter, filterchoosed}) => {
    const arraymap = globalStateObject.Platform.map((e: string) => {
      return {label: e, value: e};
    });

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
  },
);

export default FilterByPlatform;
