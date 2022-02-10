import React, {FC} from 'react';
import {View, Text} from 'react-native';

type Props = {
  objectval: object;
  index: number;
};
const Rows: FC<Props> = ({objectval, index}) => {

  if (objectval === {}) {
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
          backgroundColor: 'lavender',
          color: 'black',
        }}>
        {index === 0 && <Text>{objectval.Mydate}</Text>}
        {index === 1 && <Text>{objectval.Myse_list}</Text>}
        {index === 2 && <Text>{objectval.Myid}</Text>}
        {index === 3 && <Text>{objectval.Myplatform}</Text>}
        {index === 4 && <Text>{objectval.Myrelease_version}</Text>}
        {index === 5 && <Text>{objectval.Mycomment}</Text>}
        {index === 6 && <Text>{objectval.Mypr_Link}</Text>}
        {index === 7 && <Text>{objectval.Mysize}</Text>}
        {index === 8 && <Text>{objectval.Mydificulity}</Text>}
        {index === 9 && <Text>{objectval.Mystatus_list}</Text>}
        {index === 10 && <Text>{objectval.Myreveiwed_by_BY}</Text>}
        {index === 11 && <Text>{objectval.Myreveiwed_by_AH}</Text>}
        {index === 12 && <Text>{objectval.Myreveiwed_by_HT}</Text>}
      </View>
    );
  }
};

export default Rows;
