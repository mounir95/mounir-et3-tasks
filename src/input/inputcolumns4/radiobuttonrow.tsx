import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

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
          <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 10}}>
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
                height: 15,
                width: 15,
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
                    width: 15,
                    height: 15,
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
