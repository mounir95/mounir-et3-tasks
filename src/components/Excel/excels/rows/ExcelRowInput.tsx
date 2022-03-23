import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import getGlobalObjectStore from '../../../../stores/GlobalObjectStore';
import {setObjectArrayFun, TSQLObject} from '../../../../interfaces/interfaces';
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
import getSqlQueryStore from '../../../../stores/SqlQuery';
import {runInAction} from 'mobx';

type Props = {
  object: TSQLObject;
  index: number;
};

const ExcelRowInput: FC<Props> = observer(({object, index}) => {
  const onUpdate = (objectid: number) => {
    runInAction(() => {
      if (getExcelStore().id.get() !== objectid) {
        getExcelStore().id.set(objectid);
        getGlobalObjectStore()
          .arrayofobjects.get()
          .map((e: TSQLObject) => {
            if (e.id === getExcelStore().id.get()) {
              getUpdateFormStore().Myselist.set(e.selist);
              getUpdateFormStore().Myplatform.set(e.platform);
              getUpdateFormStore().Myreleaseversion.set(e.releaseVerion);
              getUpdateFormStore().Mystatuslist.set(e.statuslist);
              getUpdateFormStore().Mysize.set(e.size);
              getUpdateFormStore().Mydificulity.set(e.difficulity);
              getUpdateFormStore().Myprlink.set(e.prlink);
              getUpdateFormStore().Mycomment.set(e.comment);
              getUpdateFormStore().MyreviewedbyBY.set(e.reveiwedbyby);
              getUpdateFormStore().MyreviewedbyAH.set(e.reveiwedbyah);
              getUpdateFormStore().MyreviewedbyHT.set(e.reveiwedbyht);
            }
          });
      }
      if (getRequiredStore().checkUpdateValidation() === true) {
        getGlobalObjectStore()
          .arrayofobjects.get()
          .map((e: TSQLObject) => {
            if (e.id === getExcelStore().id.get()) {
              const data = {
                id: getExcelStore().id.get(),
                selist: getUpdateFormStore().Myselist.get(),
                platform: getUpdateFormStore().Myplatform.get(),
                releaseVerion: getUpdateFormStore().Myreleaseversion.get(),
                comment: getUpdateFormStore().Mycomment.get(),
                prlink: getUpdateFormStore().Myprlink.get(),
                size: getUpdateFormStore().Mysize.get(),
                difficulity: getUpdateFormStore().Mydificulity.get(),
                statuslist: getUpdateFormStore().Mystatuslist.get(),
                reveiwedbyby: getUpdateFormStore().MyreviewedbyBY.get(),
                reveiwedbyah: getUpdateFormStore().MyreviewedbyAH.get(),
                reveiwedbyht: getUpdateFormStore().MyreviewedbyHT.get(),
              };
              getSqlQueryStore().sqlUpdate(data);
            }
          });
        getExcelStore().openUpdateForm(objectid);
        getUpdateFormStore().resetStore();
        getSortFilterStore().closeopenFilter();
        getSqlQueryStore().sqlGet();
      }
    });
  };

  const onDeleteFun = () => {
    runInAction(() => {
      getGlobalObjectStore().deletObjectWithId(object.id);
      getSqlQueryStore().sqlGet();
    });
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
            onPress={() => onUpdate(object.id)}>
            {!getExcelStore().updatefalse.get() && (
              <Icons
                name="pencil"
                size={windowWidth * 0.042}
                color={colors.ninehund}
              />
            )}
            {getExcelStore().updatefalse.get() &&
              getExcelStore().id.get() === object.id && (
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
            onPress={() => onDeleteFun()}>
            <Text>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

export default ExcelRowInput;
