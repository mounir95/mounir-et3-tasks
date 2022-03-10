import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {colors, windowHeight, windowWidth} from '../../constants/constants';

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
          <View
            style={{
              flexDirection: 'row',
              marginBottom: windowWidth * 0.041,
              marginTop: windowWidth * 0.07,
            }}>
            <Text
              style={{
                marginLeft: windowWidth * 0.03,
                marginRight: windowWidth * 0.03,
                color: colors.darkgrey,
                fontWeight: '700',
              }}>
              {res.text}
            </Text>
            <TouchableOpacity
              style={{
                height: windowHeight * 0.03,
                width: windowWidth * 0.05,
                borderRadius: windowWidth * 0.301,
                borderWidth: windowWidth * 0.006,
                borderColor: colors.darkgrey,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => radiobuttonfun(res.key)}>
              {value === res.key && (
                <View
                  style={{
                    height: windowHeight * 0.03,
                    width: windowWidth * 0.05,
                    borderRadius: windowWidth * 0.006,
                    backgroundColor: colors.lightpurple,
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
