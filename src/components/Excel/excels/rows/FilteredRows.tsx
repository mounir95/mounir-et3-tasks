import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {
  colors,
  windowHeight,
  windowWidth,
} from '../../../../constants/constants';
import {TSQLObject} from '../../../../interfaces/interfaces';

type Props = {
  object: TSQLObject;
  index: number;
};
const FilteredRows: FC<Props> = ({object, index}) => {
  const objectarrayval = [
    object.date,
    object.selist,
    object.id,
    object.platform,
    object.releaseVerion,
    object.comment,
    object.prlink,
    object.size,
    object.difficulity,
    object.statuslist,
    object.reveiwedbyby,
    object.reveiwedbyah,
    object.reveiwedbyht,
  ];

  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        marginRight: windowWidth * 0.006,
        marginLeft: windowWidth * 0.006,
        marginBottom: windowWidth * 0.03,
        padding: windowWidth * 0.013,
        height: windowHeight * 0.05,
        borderRadius: windowWidth * 0.002,
        backgroundColor: colors.lavender,
      }}>
      {index <= 12 && (
        <View>
          <Text>{objectarrayval[index]}</Text>
        </View>
      )}
      {index > 12 && (
        <View>
          <Text />
        </View>
      )}
    </View>
  );
};

export default FilteredRows;
