import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

  const objectarrayval = [
    objectval.Mydate,
    objectval.Myse_list,
    objectval.Myid,
    objectval.Myplatform,
    objectval.Myrelease_version,
    objectval.Mycomment,
    objectval.Mypr_Link,
    objectval.Mysize,
    objectval.Mydificulity,
    objectval.Mystatus_list,
    objectval.Myreveiwed_by_BY,
    objectval.Myreveiwed_by_AH,
    objectval.Myreveiwed_by_HT,
  ];

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
        {index <= 12 && (
          <View>
            <Text>{objectarrayval[index]}</Text>
          </View>
        )}
        <View style={{backgroundColor: 'white', marginBottom: -5}}>
          {index === 13 && (
            <TouchableOpacity
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
                <FontAwesome name="save" size={20} color="#900" />
              )}
            </TouchableOpacity>
          )}
          {index === 14 && (
            <TouchableOpacity
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
      </View>
    );
  }
};

export default Rows;
