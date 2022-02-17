import React, {useState} from 'react';
import {View, ScrollView, FlatList, SafeAreaView} from 'react-native';
import FirstRow from '../excels/ExcelRowFirst';
import {days} from '../constants/UseContext';
import SortFilter from '../excels/sorttingfilters/SortFilter';
import ExcelRows from '../excels/rows/ExcelRows';
import UpdateForm from '../update/UpdateForm';
import {Context} from 'vm';
import {ObjectArray} from './ADDPage';
import _ from 'lodash';

export let FilteredObjectArray: Context = React.createContext<object[]>([{}]);

const Excel = () => {
  const [{id, filterfalse, updatefalse}, setState] = useState({
    id: -1,
    filterfalse: false,
    updatefalse: false,
  });
  const resetState = () => {
    setState(
      val =>
        (val = {
          id: -1,
          updatefalse: false,
          filterfalse: false,
        }),
    );
  };

  const setAllChanges = () => {
    ObjectArray._currentValue2 = ObjectArray._currentValue;
    FilteredObjectArray._currentValue2 = FilteredObjectArray._currentValue;
    FilteredObjectArray = React.createContext<object[]>([
      ...FilteredObjectArray._currentValue,
    ]);
  };

  const filterResetState = () => {
    setState(
      val =>
        (val = {
          id: -1,
          updatefalse: false,
          filterfalse: filterfalse,
        }),
    );
  };

  const onDelete = (objid: number) => {
    ObjectArray._currentValue = _.filter(
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
        }),
    );
  };

  const setDateSort = (newobjectarray: object) => {
    ObjectArray._currentValue = newobjectarray;
    setAllChanges();
    resetState();
  };

  const filterPress = () => {
    FilteredObjectArray = ObjectArray;
    setAllChanges();
    setState(
      val =>
        (val = {
          id: -1,
          updatefalse: false,
          filterfalse: !filterfalse,
        }),
    );
  };

  const textChanged = (event: string) => {
    FilteredObjectArray._currentValue = _.filter(
      ObjectArray._currentValue,
      (c: Context) => {
        if (c.hasOwnProperty('Mycomment')) {
          return c.Mycomment.includes(event) === true;
        }
      },
    );
    setAllChanges();
    filterResetState();
  };

  const FilterByPlatform = (event: React.ChangeEvent) => {
        console.log(ObjectArray)
        console.log(ObjectArray._currentValue)
    FilteredObjectArray._currentValue = _.filter(
      ObjectArray._currentValue,
      (c: Context) => {
            console.log('here 1')
        if (c.hasOwnProperty('Myplatform')) {
          return c.Myplatform === event;
        }
      },
    );
    console.log('here 2')
    setAllChanges();
    console.log(' note here')
    filterResetState();
  };

  const FilterBySE = (event: React.ChangeEvent) => {
    FilteredObjectArray._currentValue = _.filter(
      ObjectArray._currentValue,
      (c: Context) => {
        if (c.hasOwnProperty('Myse_list')) {
          return c.Myse_list === event;
        }
      },
    );
    setAllChanges();
    filterResetState();
  };
  const FilterByStatus = (event: React.ChangeEvent) => {
    FilteredObjectArray._currentValue = _.filter(
      ObjectArray._currentValue,
      (c: Context) => {
        if (c.hasOwnProperty('Mystatus_list')) {
          return c.Mystatus_list === event;
        }
      },
    );
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
          setDateSorting={(newobjectarray: object) =>
            setDateSort(newobjectarray)
          }
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
