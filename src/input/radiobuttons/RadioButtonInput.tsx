import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

type Props = {
  getboolean: {key: string; text: string}[];
  radiobuttonfun: Function;
  value: string;
};

const RadioButtonRow: FC<Props> = ({getboolean, radiobuttonfun, value}) => {
  return (
    <View>
      {getboolean.map(res => {
        return (
          <View style={{flexDirection: 'row', marginBottom: 15, marginTop: 25}}>
            <Text
              style={{
                marginLeft: 10,
                marginRight: 10,
                color: '#2750aa',
                fontWeight: '700',
              }}>
              {res.text}
            </Text>
            <TouchableOpacity
              style={{
                height: 18,
                width: 18,
                borderRadius: 110,
                borderWidth: 2,
                borderColor: '#2750aa',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => radiobuttonfun(res.key)}>
              {value === res.key && (
                <View
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 2,
                    backgroundColor: '#776677',
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default RadioButtonRow;
