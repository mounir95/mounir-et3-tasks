import React from 'react';
import {View} from 'react-native';
import {TPrObject} from '../../constant/constants';
import {excelMobx} from '../../stores/ExcelStore';
import Filters from './filters/Filters';
import SortByDate from './sorts/SortByDate';
import {sortFilterMobx} from '../../stores/SortFilterStore';
import globalObject from '../../stores/GlobalObjectStore';
import {observer} from 'mobx-react';

const SortFilter = observer(() => {
  const setDateSort = (newobjectarray: TPrObject[]) => {
    sortFilterMobx.setDateFun();
    globalObject.arrayofobjects = newobjectarray;
    excelMobx.resetStore();
  };
  return (
    <View>
      <Filters />
      <View style={{marginTop: 5, backgroundColor: 'white'}}>
        <SortByDate
          setDate={(newobjectarray: TPrObject[]) => setDateSort(newobjectarray)}
          choosedfilter={sortFilterMobx.date}
        />
      </View>
    </View>
  );
});

export default SortFilter;
