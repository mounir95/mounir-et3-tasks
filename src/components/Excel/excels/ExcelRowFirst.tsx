import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {colors, windowHeight, windowWidth} from '../../../constants/constants';
import getLanguageStore from '../../../stores/LanguageStore';

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
            marginRight: windowWidth * 0.006,
            marginLeft: windowWidth * 0.006,
            marginBottom: windowWidth * 0.03,
            padding: windowWidth * 0.013,
            height: windowHeight * 0.1,
            borderRadius: windowWidth * 0.002,
            backgroundColor: colors.white,
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
            marginRight: windowWidth * 0.006,
            marginLeft: windowWidth * 0.006,
            marginBottom: windowWidth * 0.03,
            padding: windowWidth * 0.013,
            height: windowHeight * 0.1,
            borderRadius: windowWidth * 0.002,
            backgroundColor: colors.lightpurple,
          }}>
          <Text style={{color: colors.white}}>
            {getLanguageStore.getObjArray('excelcol')[index].name}
          </Text>
        </View>
      )}
    </View>
  );
};

export default FirstRow;
