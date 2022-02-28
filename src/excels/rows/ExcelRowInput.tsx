import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import globalObject from '../../stores/GlobalObjectStore';
import {setObjectArrayFun, TPrObject} from '../../constant/constants';
import {updateFormMobx} from '../../stores/UpdateFormStore';
import {excelMobx} from '../../stores/ExcelStore';
import {observer} from 'mobx-react';
import {requiredMobx} from '../../stores/RequiredStore';

type Props = {
  object: TPrObject;
  index: number;
};
const ExcelRowInput: FC<Props> = observer(({object, index}) => {

  const onUpdate = (objectid: number) => {
    globalObject.arrayofobjects.map((e: TPrObject) => {
      if (e.Myid === excelMobx.id) {
        e.Myid = excelMobx.id;
        e.Myselist = updateFormMobx.objectval.Myselist;
        e.Myplatform = updateFormMobx.objectval.Myplatform;
        e.Myreleaseversion = updateFormMobx.objectval.Myreleaseversion;
        e.Mystatuslist = updateFormMobx.objectval.Mystatuslist;
        e.Mysize = updateFormMobx.objectval.Mysize;
        e.Mydificulity = updateFormMobx.objectval.Mydificulity;
        e.Myprlink = updateFormMobx.objectval.Myprlink;
        e.Mycomment = updateFormMobx.objectval.Mycomment;
        e.MyreviewedbyBY = updateFormMobx.objectval.MyreviewedbyBY;
        e.MyreviewedbyAH = updateFormMobx.objectval.MyreviewedbyAH;
        e.MyreviewedbyHT = updateFormMobx.objectval.MyreviewedbyHT;
      }
    });
    if (requiredMobx.checkUpdateValidation() === true) {
      excelMobx.onUpdateFun(objectid);
      updateFormMobx.resetStore();
    }
  };
  
  const objectarrayval = setObjectArrayFun(object);

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
            onPress={() => onUpdate(object.Myid)}>
            {!excelMobx.updatefalse && (
              <Icons name="pencil" size={15} color="#900" />
            )}
            {excelMobx.updatefalse && excelMobx.id === object.Myid && (
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
            onPress={() => globalObject.onDelete(object.Myid)}>
            <Text>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

export default ExcelRowInput;
