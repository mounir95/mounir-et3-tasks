import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  objectval: object;
  index: number;
  onDeletSub: any;
  onUpdateSub: any;
  updatedid: number;
};
const Rows: FC<Props> = ({
  objectval,
  index,
  onDeletSub,
  onUpdateSub,
  updatedid,
}) => {
  const onUpdate = (objid: number) => {
    onUpdateSub(objid);
  };

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
          color: 'black',
          backgroundColor: 'lavender',
        }}>
        {index !== 13 && index !== 14 && (
          <View>
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
        )}
        {index >= 13 && (
          <View style={{backgroundColor: 'white', marginBottom: -5}}>
            {index === 13 && (
              <TouchableOpacity
                key="firstkey"
                style={{
                  marginRight: 5,
                  marginLeft: 5,
                  paddingVertical: 3,
                  paddingHorizontal: 2,
                  flexDirection: 'row',
                  backgroundColor: 'white',
                }}
                onPress={() => onUpdate(objectval.Myid)}>
                {updatedid !== objectval.Myid && (
                  <Icons name="pencil" size={15} color="#900" />
                )}
                {updatedid === objectval.Myid && (
                  <Icons name="pencil" size={20} color="#900" />
                )}
              </TouchableOpacity>
            )}
            {index === 14 && (
              <TouchableOpacity
                key="secondkey"
                style={{
                  marginRight: 5,
                  marginLeft: 5,
                  paddingHorizontal: 2,
                  paddingVertical: 3,
                  backgroundColor: 'white',
                }}
                onPress={() => onDeletSub(objectval.Myid)}>
                <Text>X</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    );
  }
};

export default Rows;
