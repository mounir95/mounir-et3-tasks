import React, {FC} from 'react';
import {TextInput, View, Text} from 'react-native';
import {observer} from 'mobx-react';
import getLanguageStore from '../../../stores/LanguageStore';
import {windowHeight} from '../../../constants/constants';

type Props = {
  textChanged: Function;
  filterchoosed: Boolean;
};

const FilterByComment: FC<Props> = observer(({textChanged, filterchoosed}) => {
  return (
    <View>
      <Text>{getLanguageStore.get('searchbycomment')}</Text>
      {filterchoosed && (
        <TextInput
          style={{
            height: windowHeight * 0.05,
            margin: 12,
            borderWidth: 1,
            padding: 5,
          }}
          onChangeText={(event: string) => textChanged(event)}
        />
      )}
      {!filterchoosed && (
        <TextInput
          style={{
            height: windowHeight * 0.05,
            margin: 12,
            borderWidth: 1,
            padding: 5,
          }}
          onChangeText={(event: string) => textChanged(event)}
        />
      )}
    </View>
  );
});

export default FilterByComment;
