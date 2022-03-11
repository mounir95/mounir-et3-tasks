import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {
  colors,
  windowHeight,
  windowWidth,
} from '../../../../constants/constants';
import {TPrObject} from '../../../../interfaces/interfaces';

type Props = {
  object: TPrObject;
  index: number;
};
const FilteredRows: FC<Props> = ({object, index}) => {
  const objectarrayval = [
    object.Mydate,
    object.Myselist,
    object.Myid,
    object.Myplatform,
    object.Myreleaseversion,
    object.Mycomment,
    object.Myprlink,
    object.Mysize,
    object.Mydificulity,
    object.Mystatuslist,
    object.MyreviewedbyBY,
    object.MyreviewedbyAH,
    object.MyreviewedbyHT,
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
