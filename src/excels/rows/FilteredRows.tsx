import React, {FC} from 'react';
import {View, Text} from 'react-native';

type Props = {
  object: object;
  index: number;
};
const FilteredRows: FC<Props> = ({object, index}) => {
  const objectarrayval = [
    object.Mydate,
    object.Myse_list,
    object.Myid,
    object.Myplatform,
    object.Myrelease_version,
    object.Mycomment,
    object.Mypr_Link,
    object.Mysize,
    object.Mydificulity,
    object.Mystatus_list,
    object.Myreveiwed_by_BY,
    object.Myreveiwed_by_AH,
    object.Myreveiwed_by_HT,
  ];

  if (object === {}) {
    return <Text />;
  } else {
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
          height: 35,
          borderRadius: 1,
          color: 'black',
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
  }
};

export default FilteredRows;
