import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {days} from '../constants/UseContext';

type Props = {
  index: number;
};
const FirstRow: FC<Props> = ({index}) => {
  return (
    <View>
      {index >= 13 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            marginRight: 2,
            marginLeft: 2,
            marginBottom: 10,
            padding: 5,
            height: 60,
            borderRadius: 1,
            backgroundColor: 'white',
          }}>
          <Text />
        </View>
      )}
      {index !== 13 && index !== 14 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            marginRight: 2,
            marginLeft: 2,
            marginBottom: 10,
            padding: 5,
            height: 60,
            borderRadius: 1,
            backgroundColor: '#776677',
          }}>
          <Text style={{color: 'white'}}>{days[index].name}</Text>
        </View>
      )}
    </View>
  );
};

export default FirstRow;
