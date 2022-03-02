import React from 'react';
import {View} from 'react-native';
import Filters from './filters/Filters';
import SortByDate from './sorts/SortByDate';
import {observer} from 'mobx-react';
import getSortFilterStore from '../../stores/SortFilterStore';

const SortFilter = observer(() => {
  return (
    <View>
      {getSortFilterStore().filtercontainertrue.get() && (
        <View>
          <Filters />
          <View style={{marginTop: 5, backgroundColor: 'white'}}>
            <SortByDate />
          </View>
        </View>
      )}
    </View>
  );
});

export default SortFilter;
