import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {windowHeight} from '../../constants/constants';
import {TPrObject} from '../../interfaces/interfaces';

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
        marginRight: 2,
        marginLeft: 2,
        marginBottom: 10,
        padding: 5,
        height: windowHeight * 0.05,
        borderRadius: 1,
        backgroundColor: 'lavender',
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
