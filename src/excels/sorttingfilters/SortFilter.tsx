import React from 'react';
import {View} from 'react-native';
import {ExcelMobx, TPrObject} from '../../constants/UseContext';
import Filters from './filters/Filters';
import SortByDate from './sorts/SortByDate';
import {SortFilterMobx} from '../../constants/UseContext';
import globalObj from '../../constants/ObjectStore';
import {observer} from 'mobx-react';

const SortFilter = observer(() => {
  const setDateSort = (newobjectarray: TPrObject[]) => {
    SortFilterMobx.setDateFun();
    globalObj.arrayofobjects = newobjectarray;
    ExcelMobx.resetStore();
  };
  return (
    <View>
      <Filters />
      <View style={{marginTop: 5, backgroundColor: 'white'}}>
        <SortByDate
          setDate={(newobjectarray: TPrObject[]) => setDateSort(newobjectarray)}
          choosedfilter={SortFilterMobx.date}
        />
      </View>
    </View>
  );
});

export default SortFilter;
