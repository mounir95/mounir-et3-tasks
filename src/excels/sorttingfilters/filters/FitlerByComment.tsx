import React, {FC} from 'react';
import {TextInput, View, Text} from 'react-native';

type Props = {
  textChanged: Function;
  filterchoosed: Boolean;
};

const FilterByComment: FC<Props> = ({textChanged, filterchoosed}) => {
  return (
    <View>
      <Text>Search By Comment</Text>
      {filterchoosed && (
        <TextInput
          style={{height: 30, margin: 12, borderWidth: 1, padding: 5}}
          onChangeText={(event: string) => textChanged(event)}
        />
      )}
      {!filterchoosed && (
        <TextInput
          style={{height: 30, margin: 12, borderWidth: 1, padding: 5}}
          onChangeText={(event: string) => textChanged(event)}
        />
      )}
    </View>
  );
};

export default FilterByComment;
