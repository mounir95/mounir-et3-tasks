import React, {useState} from 'react';
import {View, ScrollView, FlatList, SafeAreaView} from 'react-native';
import FirstRow from '../excels/ExcelRowFirst';
import {days} from '../constants/UseContext';
import SortFilter from '../excels/sorttingfilters/SortFilter';
import ExcelRows from '../excels/rows/ExcelRows';
import UpdateForm from '../update/UpdateForm';
import {Context} from 'vm';
import {ObjectArray} from './ADDPage';
import filter from 'lodash/filter';

type Props = {
  route: any;
}

const Excel: React.FC<Props> = ({route}) => {
  console.log(route.params);
  let [{id, filterfalse, updatefalse, FilteredObjectArray}, setState] =
    useState({
      id: -1,
      filterfalse: false,
      updatefalse: false,
      FilteredObjectArray: [{}],
    });
  const resetState = () => {
    setState(
      val =>
        (val = {
          id: -1,
          updatefalse: false,
          filterfalse: false,
          FilteredObjectArray: FilteredObjectArray,
        }),
    );
  };

  const setAllChanges = () => {
    ObjectArray._currentValue2 = ObjectArray._currentValue;
    FilteredObjectArray = FilteredObjectArray;
  };

  const filterResetState = () => {
    setState(
      val =>
        (val = {
          id: -1,
          updatefalse: false,
          filterfalse: filterfalse,
          FilteredObjectArray: FilteredObjectArray,
        }),
    );
  };

  const onDelete = (objid: number) => {
    ObjectArray._currentValue = filter(
      ObjectArray._currentValue,
      (c: Context) => {
        return c.Myid !== objid;
      },
    );
    setAllChanges();
    resetState();
  };

  const onUpdate = (objid: number) => {
    setState(
      val =>
        (val = {
          id: objid,
          updatefalse: true,
          filterfalse: false,
          FilteredObjectArray: FilteredObjectArray,
        }),
    );
  };

  const setDateSort = (newobjectarray: Date) => {
    ObjectArray._currentValue = newobjectarray;
    setAllChanges();
    resetState();
  };

  const filterPress = () => {
    FilteredObjectArray = ObjectArray._currentValue;
    setAllChanges();
    setState(
      val =>
        (val = {
          id: -1,
          updatefalse: false,
          filterfalse: !filterfalse,
          FilteredObjectArray: FilteredObjectArray,
        }),
    );
  };

  const textChanged = (event: string) => {
    FilteredObjectArray = filter(ObjectArray._currentValue, (c: Context) => {
      if (c.hasOwnProperty('Mycomment')) {
        return c.Mycomment.includes(event) === true;
      }
    });
    setAllChanges();
    filterResetState();
  };

  const FilterByPlatform = (event: React.ChangeEvent) => {
    FilteredObjectArray = filter(ObjectArray._currentValue, (c: Context) => {
      if (c.hasOwnProperty('Myplatform')) {
        return c.Myplatform === event;
      }
    });
    setAllChanges();
    filterResetState();
  };

  const FilterBySE = (event: React.ChangeEvent) => {
    FilteredObjectArray = filter(ObjectArray._currentValue, (c: Context) => {
      if (c.hasOwnProperty('Myselist')) {
        return c.Myselist === event;
      }
    });
    setAllChanges();
    filterResetState();
  };
  const FilterByStatus = (event: React.ChangeEvent) => {
    FilteredObjectArray = filter(ObjectArray._currentValue, (c: Context) => {
      if (c.hasOwnProperty('Mystatuslist')) {
        return c.Mystatuslist === event;
      }
    });
    setAllChanges();
    filterResetState();
  };

  const inputUpdateButton = () => {
    resetState();
    setAllChanges();
  };

  const inputCloseButton = () => {
    resetState();
  };

  return (
    <SafeAreaView style={{flex: 1, marginTop: 22}}>
      <ScrollView>
        <SortFilter
          filterPressed={() => filterPress()}
          filterfalse={filterfalse}
          setDateSorting={(newobjectarray: Date) => setDateSort(newobjectarray)}
          changeText={(event: string) => textChanged(event)}
          platformFilter={(event: React.ChangeEvent) => FilterByPlatform(event)}
          seListFilter={(event: React.ChangeEvent) => FilterBySE(event)}
          statusFilter={(event: React.ChangeEvent) => FilterByStatus(event)}
        />
        <FlatList
          horizontal={true}
          data={days}
          renderItem={({index}) => (
            <View>
              <FirstRow index={index} />
              <ExcelRows
                filtertrue={filterfalse}
                updatedid={id}
                onUpdateSub={(objid: number) => onUpdate(objid)}
                onDeletSub={(objid: number) => onDelete(objid)}
                index={index}
                FilteredArrayObject={FilteredObjectArray}
              />
            </View>
          )}
          keyExtractor={item => item.name}
          extraData={days}
        />
        <UpdateForm
          inputupdateformtrue={updatefalse}
          updatedid={id}
          inputUpdate={() => inputUpdateButton()}
          inputClose={() => inputCloseButton()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Excel;
