import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  object: object;
  index: number;
  onDelete: any;
  onUpdate: any;
  updateiconid: number;
};
const ExcelRowInput: FC<Props> = ({
  object,
  index,
  onDelete,
  onUpdate,
  updateiconid,
}) => {

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
              onPress={() => onUpdate(object.Myid)}>
              {updateiconid !== object.Myid && (
                <Icons name="pencil" size={15} color="#900" />
              )}
              {updateiconid === object.Myid && (
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
              onPress={() => onDelete(object.Myid)}>
              <Text>X</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
};

export default ExcelRowInput;
