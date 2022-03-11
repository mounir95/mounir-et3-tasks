import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import getGlobalObjectStore from '../../../../stores/GlobalObjectStore';
import {setObjectArrayFun, TPrObject} from '../../../../interfaces/interfaces';
import getUpdateFormStore from '../../../../stores/UpdateFormStore';
import getExcelStore from '../../../../stores/ExcelStore';
import {observer} from 'mobx-react';
import getRequiredStore from '../../../../stores/RequiredStore';
import getSortFilterStore from '../../../../stores/SortFilterStore';
import {
  colors,
  windowHeight,
  windowWidth,
} from '../../../../constants/constants';

type Props = {
  object: TPrObject;
  index: number;
};
const ExcelRowInput: FC<Props> = observer(({object, index}) => {
  const onUpdate = (objectid: number) => {
    if (getExcelStore().id.get() !== objectid) {
      getExcelStore().id.set(objectid);
      getGlobalObjectStore()
        .arrayofobjects.get()
        .map((e: TPrObject) => {
          if (e.Myid === getExcelStore().id.get()) {
            getUpdateFormStore().Myselist.set(e.Myselist);
            getUpdateFormStore().Myplatform.set(e.Myplatform);
            getUpdateFormStore().Myreleaseversion.set(e.Myreleaseversion);
            getUpdateFormStore().Mystatuslist.set(e.Mystatuslist);
            getUpdateFormStore().Mysize.set(e.Mysize);
            getUpdateFormStore().Mydificulity.set(e.Mydificulity);
            getUpdateFormStore().Myprlink.set(e.Myprlink);
            getUpdateFormStore().Mycomment.set(e.Mycomment);
            getUpdateFormStore().MyreviewedbyBY.set(e.MyreviewedbyBY);
            getUpdateFormStore().MyreviewedbyAH.set(e.MyreviewedbyAH);
            getUpdateFormStore().MyreviewedbyHT.set(e.MyreviewedbyHT);
          }
        });
      // getRequiredStore().setValidationTrue();
    }
    if (getRequiredStore().checkUpdateValidation() === true) {
      getGlobalObjectStore()
        .arrayofobjects.get()
        .map((e: TPrObject) => {
          if (e.Myid === getExcelStore().id.get()) {
            e.Myselist = getUpdateFormStore().Myselist.get();
            e.Myplatform = getUpdateFormStore().Myplatform.get();
            e.Myreleaseversion = getUpdateFormStore().Myreleaseversion.get();
            e.Mystatuslist = getUpdateFormStore().Mystatuslist.get();
            e.Mysize = getUpdateFormStore().Mysize.get();
            e.Mydificulity = getUpdateFormStore().Mydificulity.get();
            e.Myprlink = getUpdateFormStore().Myprlink.get();
            e.Mycomment = getUpdateFormStore().Mycomment.get();
            e.MyreviewedbyBY = getUpdateFormStore().MyreviewedbyBY.get();
            e.MyreviewedbyAH = getUpdateFormStore().MyreviewedbyAH.get();
            e.MyreviewedbyHT = getUpdateFormStore().MyreviewedbyHT.get();
          }
        });
      getExcelStore().openUpdateForm(objectid);
      getUpdateFormStore().resetStore();
      getSortFilterStore().closeopenFilter();
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
      <View style={{marginBottom: -5}}>
        {index === 13 && (
          <TouchableOpacity
            style={{
              marginRight: windowWidth * 0.013,
              marginLeft: windowWidth * 0.013,
              paddingVertical: windowWidth * 0.0084,
              paddingHorizontal: windowWidth * 0.006,
              flexDirection: 'row',
            }}
            onPress={() => onUpdate(object.Myid)}>
            {!getExcelStore().updatefalse.get() && (
              <Icons
                name="pencil"
                size={windowWidth * 0.042}
                color={colors.ninehund}
              />
            )}
            {getExcelStore().updatefalse.get() &&
              getExcelStore().id.get() === object.Myid && (
                <FontAwesome
                  name="save"
                  size={windowWidth * 0.056}
                  color={colors.ninehund}
                />
              )}
          </TouchableOpacity>
        )}
        {index === 14 && getSortFilterStore().filtercontainertrue.get() && (
          <TouchableOpacity
            style={{
              marginRight: windowWidth * 0.013,
              marginLeft: windowWidth * 0.013,
              paddingHorizontal: windowWidth * 0.006,
              paddingVertical: windowWidth * 0.0084,
              backgroundColor: colors.white,
            }}
            onPress={() =>
              getGlobalObjectStore().deletObjectWithId(object.Myid)
            }>
            <Text>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

export default ExcelRowInput;
