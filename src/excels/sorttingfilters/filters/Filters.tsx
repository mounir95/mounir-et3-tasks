import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FilterByComment from './FitlerByComment';
import FilterByStatus from './FilterByStatus';
import FilterBySE from './FilterBySE';
import FilterByPlatform from './FilterByPlatform';
import {ExcelMobx, FilterMobx, TPrObject} from '../../../constants/UseContext';
import globalObj from '../../../constants/ObjectStore';
import filter from 'lodash/filter';
import {observer} from 'mobx-react';

const Filters = observer(() => {
  const filterStatusFun = (event: React.ChangeEvent) => {
    globalObj.filteredarrayofobjects = filter(
      globalObj.arrayofobjects,
      (c: TPrObject) => {
        if (c.hasOwnProperty('Mystatuslist')) {
          return c.Mystatuslist === event.toString();
        }
      },
    );
    ExcelMobx.filterResetStore();
    FilterMobx.changefilter(
      !FilterMobx.platform,
      !FilterMobx.se,
      FilterMobx.status,
      !FilterMobx.comment,
    );
  };

  const filterSElistFun = (event: React.ChangeEvent) => {
    globalObj.filteredarrayofobjects = filter(
      globalObj.arrayofobjects,
      (c: TPrObject) => {
        if (c.hasOwnProperty('Myselist')) {
          return c.Myselist === event.toString();
        }
      },
    );
    ExcelMobx.filterResetStore();
    FilterMobx.changefilter(
      !FilterMobx.platform,
      FilterMobx.se,
      !FilterMobx.status,
      !FilterMobx.comment,
    );
  };

  const filterPlatformFun = (event: React.ChangeEvent) => {
    globalObj.filteredarrayofobjects = filter(
      globalObj.arrayofobjects,
      (c: TPrObject) => {
        if (c.hasOwnProperty('Myplatform')) {
          return c.Myplatform === event.toString();
        }
      },
    );
    ExcelMobx.filterResetStore();
    FilterMobx.changefilter(
      FilterMobx.platform,
      !FilterMobx.se,
      !FilterMobx.status,
      !FilterMobx.comment,
    );
  };

  const textChangedFun = (event: string) => {
    globalObj.filteredarrayofobjects = filter(
      globalObj.arrayofobjects,
      (c: TPrObject) => {
        if (c.hasOwnProperty('Mycomment')) {
          return c.Mycomment.includes(event) === true;
        }
      },
    );
    ExcelMobx.filterResetStore();
    FilterMobx.changefilter(
      !FilterMobx.platform,
      !FilterMobx.se,
      !FilterMobx.status,
      FilterMobx.comment,
    );
  };

  const pressFilter = () => {
    ExcelMobx.filterPressFun();
    globalObj.filteredarrayofobjects = globalObj.arrayofobjects;
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
        {ExcelMobx.filterfalse && (
          <FontAwesome
            style={{textAlign: 'right'}}
            name="window-minimize"
            size={15}
            color="#900"
          />
        )}
        {!ExcelMobx.filterfalse && (
          <Icon
            style={{textAlign: 'right'}}
            name="md-add"
            size={20}
            color="#900"
          />
        )}
      </TouchableOpacity>
      {ExcelMobx.filterfalse && (
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
                filterchoosed={FilterMobx.status}
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
                filterchoosed={FilterMobx.se}
              />
            </View>
            <View
              style={{flexDirection: 'column', marginLeft: 10, marginRight: 5}}>
              <FilterByPlatform
                platformFilter={(event: React.ChangeEvent) =>
                  filterPlatformFun(event)
                }
                filterchoosed={FilterMobx.platform}
              />
            </View>
          </View>
          <FilterByComment
            textChanged={(event: string) => textChangedFun(event)}
            filterchoosed={FilterMobx.comment}
          />
        </View>
      )}
    </View>
  );
});

export default Filters;
