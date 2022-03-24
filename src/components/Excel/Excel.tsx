import React from 'react';
import {View, ScrollView, FlatList, SafeAreaView} from 'react-native';
import FirstRow from './excels/ExcelRowFirst';
import SortFilter from './excels/sorttingfilters/SortFilter';
import ExcelRows from './excels/rows/ExcelRows';
import UpdateForm from './update/UpdateForm';
import {observer} from 'mobx-react';
import getLanguageStore from '../../stores/LanguageStore';
import {windowWidth} from '../../constants/constants';
import getSqlQueryStore from '../../stores/SqlQuery';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {runInAction} from 'mobx';

const Excel = observer(() => {
  React.useEffect(() => {
    runInAction(() => {
      getSqlQueryStore().sqlGet();
      async () => {
        const value = await AsyncStorage.getItem('language');
        if (value !== null) {
          getLanguageStore.language.set(value);
        } else {
          await AsyncStorage.setItem('language', 'ENG');
          getLanguageStore.language.set('EN');
        }
      };
    });
  }, []);
  
  return (
    <SafeAreaView style={{flex: 1, marginTop: windowWidth * 0.06}}>
      <ScrollView>
        <SortFilter />
        <FlatList
          horizontal={true}
          data={getLanguageStore.getObjArray('excelcol')}
          renderItem={({index}) => (
            <View>
              <FirstRow index={index} />
              <ExcelRows index={index} />
            </View>
          )}
          keyExtractor={item => item.name}
          extraData={getLanguageStore.getObjArray('excelcol')}
        />
        <UpdateForm />
      </ScrollView>
    </SafeAreaView>
  );
});

export default Excel;
