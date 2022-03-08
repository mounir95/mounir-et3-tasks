import React from 'react';
import {View, ScrollView, FlatList, SafeAreaView} from 'react-native';
import FirstRow from '../excels/ExcelRowFirst';
import SortFilter from '../excels/sorttingfilters/SortFilter';
import ExcelRows from '../excels/rows/ExcelRows';
import UpdateForm from '../update/UpdateForm';
import {observer} from 'mobx-react';
import getLanguageStore from '../stores/LanguageStore';

const Excel = observer(() => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 22}}>
      <ScrollView>
        <SortFilter />
        <FlatList
          horizontal={true}
          data={getLanguageStore().translatedlang.get().excelcol}
          renderItem={({index}) => (
            <View>
              <FirstRow index={index} />
              <ExcelRows index={index} />
            </View>
          )}
          keyExtractor={item => item.name}
          extraData={getLanguageStore().translatedlang.get().excelcol}
        />
        <UpdateForm />
      </ScrollView>
    </SafeAreaView>
  );
});

export default Excel;
