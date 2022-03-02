import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FilterByComment from './FitlerByComment';
import FilterByStatus from './FilterByStatus';
import FilterBySE from './FilterBySE';
import FilterByPlatform from './FilterByPlatform';
import {TPrObject} from '../../../constant/constants';
import getExcelStore from '../../../stores/ExcelStore';
import getFilterStore from '../../../stores/FilterStore';
import getGlobalObjectStore from '../../../stores/GlobalObjectStore';
import filter from 'lodash/filter';
import {observer} from 'mobx-react';

const Filters = observer(() => {
  const filterStatusFun = (event: React.ChangeEvent) => {
    getGlobalObjectStore().filteredarrayofobjects.set(
      filter(getGlobalObjectStore().arrayofobjects.get(), (c: TPrObject) => {
        if (c.hasOwnProperty('Mystatuslist')) {
          return c.Mystatuslist === event.toString();
        }
      }),
    );
    getFilterStore().platform.set(!getFilterStore().platform.get());
    getFilterStore().se.set(!getFilterStore().se.get());
    getFilterStore().status.set(getFilterStore().status.get());
    getFilterStore().comment.set(!getFilterStore().comment.get());
  };

  const filterSElistFun = (event: React.ChangeEvent) => {
    getGlobalObjectStore().filteredarrayofobjects.set(
      filter(getGlobalObjectStore().arrayofobjects.get(), (c: TPrObject) => {
        if (c.hasOwnProperty('Myselist')) {
          return c.Myselist === event.toString();
        }
      }),
    );
    getFilterStore().platform.set(!getFilterStore().platform.get());
    getFilterStore().se.set(getFilterStore().se.get());
    getFilterStore().status.set(!getFilterStore().status.get());
    getFilterStore().comment.set(!getFilterStore().comment.get());
  };

  const filterPlatformFun = (event: React.ChangeEvent) => {
    getGlobalObjectStore().filteredarrayofobjects.set(
      filter(getGlobalObjectStore().arrayofobjects.get(), (c: TPrObject) => {
        if (c.hasOwnProperty('Myplatform')) {
          return c.Myplatform === event.toString();
        }
      }),
    );
    getFilterStore().platform.set(getFilterStore().platform.get());
    getFilterStore().se.set(getFilterStore().se.get());
    getFilterStore().status.set(!getFilterStore().status.get());
    getFilterStore().comment.set(!getFilterStore().comment.get());
  };

  const textChangedFun = (event: string) => {
    getGlobalObjectStore().filteredarrayofobjects.set(
      filter(getGlobalObjectStore().arrayofobjects.get(), (c: TPrObject) => {
        if (c.hasOwnProperty('Mycomment')) {
          return c.Mycomment.includes(event) === true;
        }
      }),
    );
    getFilterStore().platform.set(!getFilterStore().platform.get());
    getFilterStore().se.set(!getFilterStore().se.get());
    getFilterStore().status.set(!getFilterStore().status.get());
    getFilterStore().comment.set(getFilterStore().comment.get());
  };

  const pressFilter = () => {
    getExcelStore().openFilterForm();
    getGlobalObjectStore().filteredarrayofobjects.set(
      getGlobalObjectStore().arrayofobjects.get(),
    );
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          paddingVertical: 3,
          paddingHorizontal: 3,
          backgroundColor: 'white',
        }}
        onPress={() => pressFilter()}>
        {getExcelStore().filterfalse.get() && (
          <FontAwesome
            style={{textAlign: 'right'}}
            name="window-minimize"
            size={15}
            color="#900"
          />
        )}
        {!getExcelStore().filterfalse.get() && (
          <Icon
            style={{textAlign: 'right'}}
            name="md-add"
            size={20}
            color="#900"
          />
        )}
      </TouchableOpacity>
      {getExcelStore().filterfalse.get() && (
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
                filterchoosed={getFilterStore().status.get()}
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
                filterchoosed={getFilterStore().se.get()}
              />
            </View>
            <View
              style={{flexDirection: 'column', marginLeft: 10, marginRight: 5}}>
              <FilterByPlatform
                platformFilter={(event: React.ChangeEvent) =>
                  filterPlatformFun(event)
                }
                filterchoosed={getFilterStore().platform.get()}
              />
            </View>
          </View>
          <FilterByComment
            textChanged={(event: string) => textChangedFun(event)}
            filterchoosed={getFilterStore().comment.get()}
          />
        </View>
      )}
    </View>
  );
});

export default Filters;
