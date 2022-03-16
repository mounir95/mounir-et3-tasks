import React from 'react';
import {View, ScrollView, FlatList, SafeAreaView} from 'react-native';
import FirstRow from './excels/ExcelRowFirst';
import SortFilter from './excels/sorttingfilters/SortFilter';
import ExcelRows from './excels/rows/ExcelRows';
import UpdateForm from './update/UpdateForm';
import {observer} from 'mobx-react';
import getLanguageStore from '../../stores/LanguageStore';
import {windowWidth} from '../../constants/constants';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';

const Excel = observer(() => {
  React.useEffect(() => {
    fetch('http://192.168.42.231:3001/api/get', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    }).then(async res => {
      getGlobalObjectStore().arrayofobjects.set(await res.json());
    });
  }, []);
  
  
  return (
    <SafeAreaView style={{flex: 1, marginTop: windowWidth * 0.06}}>
      <ScrollView>
        <SortFilter />
        <FlatList
          horizontal={true}
          data={getLanguageStore.get('excelcol')}
          renderItem={({index}) => (
            <View>
              <FirstRow index={index} />
              <ExcelRows index={index} />
            </View>
          )}
          keyExtractor={item => item.name}
          extraData={getLanguageStore.get('excelcol')}
        />
        <UpdateForm />
      </ScrollView>
    </SafeAreaView>
  );
});

export default Excel;
