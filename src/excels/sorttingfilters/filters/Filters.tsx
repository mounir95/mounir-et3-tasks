import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FilterByComment from './FitlerByComment';
import FilterByStatus from './FilterByStatus';
import FilterBySE from './FilterBySE';
import FilterByPlatform from './FilterByPlatform';
import {TPrObject} from '../../../constant/constants';
import {excelMobx} from '../../../stores/ExcelStore';
import {filterMobx} from '../../../stores/FilterStore';
import globalObject from '../../../stores/GlobalObjectStore';
import filter from 'lodash/filter';
import {observer} from 'mobx-react';

const Filters = observer(() => {
  const filterStatusFun = (event: React.ChangeEvent) => {
    globalObject.filteredarrayofobjects = filter(
      globalObject.arrayofobjects,
      (c: TPrObject) => {
        if (c.hasOwnProperty('Mystatuslist')) {
          return c.Mystatuslist === event.toString();
        }
      },
    );
    excelMobx.filterResetStore();
    filterMobx.changefilter(
      !filterMobx.platform,
      !filterMobx.se,
      filterMobx.status,
      !filterMobx.comment,
    );
  };

  const filterSElistFun = (event: React.ChangeEvent) => {
    globalObject.filteredarrayofobjects = filter(
      globalObject.arrayofobjects,
      (c: TPrObject) => {
        if (c.hasOwnProperty('Myselist')) {
          return c.Myselist === event.toString();
        }
      },
    );
    excelMobx.filterResetStore();
    filterMobx.changefilter(
      !filterMobx.platform,
      filterMobx.se,
      !filterMobx.status,
      !filterMobx.comment,
    );
  };

  const filterPlatformFun = (event: React.ChangeEvent) => {
    globalObject.filteredarrayofobjects = filter(
      globalObject.arrayofobjects,
      (c: TPrObject) => {
        if (c.hasOwnProperty('Myplatform')) {
          return c.Myplatform === event.toString();
        }
      },
    );
    excelMobx.filterResetStore();
    filterMobx.changefilter(
      filterMobx.platform,
      !filterMobx.se,
      !filterMobx.status,
      !filterMobx.comment,
    );
  };

  const textChangedFun = (event: string) => {
    globalObject.filteredarrayofobjects = filter(
      globalObject.arrayofobjects,
      (c: TPrObject) => {
        if (c.hasOwnProperty('Mycomment')) {
          return c.Mycomment.includes(event) === true;
        }
      },
    );
    excelMobx.filterResetStore();
    filterMobx.changefilter(
      !filterMobx.platform,
      !filterMobx.se,
      !filterMobx.status,
      filterMobx.comment,
    );
  };

  const pressFilter = () => {
    excelMobx.filterPressFun();
    globalObject.filteredarrayofobjects = globalObject.arrayofobjects;
  }

  return (
    <View>
      <TouchableOpacity
        style={{
          paddingVertical: 3,
          paddingHorizontal: 3,
          backgroundColor: 'white',
        }}
        onPress={() => pressFilter()}>
        {excelMobx.filterfalse && (
          <FontAwesome
            style={{textAlign: 'right'}}
            name="window-minimize"
            size={15}
            color="#900"
          />
        )}
        {!excelMobx.filterfalse && (
          <Icon
            style={{textAlign: 'right'}}
            name="md-add"
            size={20}
            color="#900"
          />
        )}
      </TouchableOpacity>
      {excelMobx.filterfalse && (
        <View style={{marginBottom: 5, backgroundColor: 'lavender'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
              marginBottom: 15,
            }}>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 15,
                marginRight: 10,
              }}>
              <FilterByStatus
                statusFilter={(event: React.ChangeEvent) =>
                  filterStatusFun(event)
                }
                filterchoosed={filterMobx.status}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                marginRight: 10,
              }}>
              <FilterBySE
                seListFilter={(event: React.ChangeEvent) =>
                  filterSElistFun(event)
                }
                filterchoosed={filterMobx.se}
              />
            </View>
            <View
              style={{flexDirection: 'column', marginLeft: 10, marginRight: 5}}>
              <FilterByPlatform
                platformFilter={(event: React.ChangeEvent) =>
                  filterPlatformFun(event)
                }
                filterchoosed={filterMobx.platform}
              />
            </View>
          </View>
          <FilterByComment
            textChanged={(event: string) => textChangedFun(event)}
            filterchoosed={filterMobx.comment}
          />
        </View>
      )}
    </View>
  );
});

export default Filters;
