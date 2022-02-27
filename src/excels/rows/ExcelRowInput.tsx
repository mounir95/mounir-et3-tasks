import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import globalObj from '../../constants/ObjectStore';
import {ExcelMobx, TPrObject} from '../../constants/UseContext';
import {observer} from 'mobx-react';

type Props = {
  object: TPrObject;
  index: number;
};
const ExcelRowInput: FC<Props> = observer(({object, index}) => {
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
        height: 35,
        borderRadius: 1,
        backgroundColor: 'lavender',
      }}>
      {index <= 12 && (
        <View>
          <Text>{objectarrayval[index]}</Text>
        </View>
      )}
      <View style={{marginBottom: -5}}>
        {index === 13 && (
          <TouchableOpacity
            style={{
              marginRight: 5,
              marginLeft: 5,
              paddingVertical: 3,
              paddingHorizontal: 2,
              flexDirection: 'row',
            }}
            onPress={() => ExcelMobx.onUpdateFun(object.Myid)}>
            {ExcelMobx.id !== object.Myid && ExcelMobx.id === -1 && (
              <Icons name="pencil" size={15} color="#900" />
            )}
            {ExcelMobx.id === object.Myid && (
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
            onPress={() => globalObj.onDelete(object.Myid)}>
            <Text>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

export default ExcelRowInput;
