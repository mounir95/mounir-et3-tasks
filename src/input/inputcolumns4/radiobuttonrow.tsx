import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';

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
          <View style={styles.rbWrapper}>
            <View style={styles.rbWrapperRow}>
              <Text style={styles.textStyle}>{res.text}</Text>
              <TouchableOpacity
                style={styles.rbStyle}
                onPress={() => radiobuttonfun(res.key)}>
                {value === res.key && <View style={styles.selected} />}
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  rbWrapper: {
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rbWrapperRow: {
    flexDirection: 'row',
  },
  textStyle: {
    marginLeft: 10,
    marginRight: 10,
    color: '#2750aa',
    fontWeight: '700',
  },
  rbStyle: {
    height: 15,
    width: 15,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: '#2750aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    width: 15,
    height: 15,
    borderRadius: 2,
    backgroundColor: '#776677',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default RadioButtonRow;
