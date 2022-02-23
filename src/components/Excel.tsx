import React, {useState} from 'react';
import {View, ScrollView, FlatList, SafeAreaView} from 'react-native';
import FirstRow from '../excels/ExcelRowFirst';
import {days, TPrObject} from '../constants/UseContext';
import SortFilter from '../excels/sorttingfilters/SortFilter';
import ExcelRows from '../excels/rows/ExcelRows';
import UpdateForm from '../update/UpdateForm';
import filter from 'lodash/filter';

type Props = {
  route: any;
};

const Excel: React.FC<Props> = ({route}) => {
  let [
    {id, filterfalse, updatefalse, Filteredobjectarray, ObjectArray},
    setState,
  ] = useState({
    id: -1,
    filterfalse: false,
    updatefalse: false,
    ObjectArray: route.params.arrayofobjects,
    Filteredobjectarray: [{}],
  });
  const resetState = () => {
    setState(
      val =>
        (val = {
          id: -1,
          updatefalse: false,
          filterfalse: false,
          ObjectArray: ObjectArray,
          Filteredobjectarray: Filteredobjectarray,
        }),
    );
  };

  const filterResetState = () => {
    setState(
      val =>
        (val = {
          id: -1,
          updatefalse: false,
          filterfalse: filterfalse,
          ObjectArray: ObjectArray,
          Filteredobjectarray: Filteredobjectarray,
        }),
    );
  };

  const onDelete = (objid: number) => {
    setState(
      val =>
        (val = {
          id: -1,
          updatefalse: false,
          filterfalse: false,
          ObjectArray: filter(ObjectArray, (c: TPrObject) => {
            return c.Myid !== objid;
          }),
          Filteredobjectarray: Filteredobjectarray,
        }),
    );
  };

  const onUpdate = (objid: number) => {
    setState(
      val =>
        (val = {
          id: objid,
          updatefalse: true,
          filterfalse: false,
          ObjectArray: ObjectArray,
          Filteredobjectarray: Filteredobjectarray,
        }),
    );
  };

  const setDateSort = (newobjectarray: TPrObject[]) => {
    setState(
      val =>
        (val = {
          id: -1,
          updatefalse: false,
          filterfalse: false,
          ObjectArray: newobjectarray,
          Filteredobjectarray: Filteredobjectarray,
        }),
    );
  };

  const filterPress = () => {
    setState(
      val =>
        (val = {
          id: -1,
          updatefalse: false,
          filterfalse: !filterfalse,
          ObjectArray: ObjectArray,
          Filteredobjectarray: ObjectArray,
        }),
    );
  };

  const textChanged = (event: string) => {
    Filteredobjectarray = filter(ObjectArray, (c: TPrObject) => {
      if (c.hasOwnProperty('Mycomment')) {
        return c.Mycomment.includes(event) === true;
      }
    });
    filterResetState();
  };

  const FilterByPlatform = (event: React.ChangeEvent) => {
    Filteredobjectarray = filter(ObjectArray, (c: TPrObject) => {
      if (c.hasOwnProperty('Myplatform')) {
        return c.Myplatform === event.toString();
      }
    });
    filterResetState();
  };

  const FilterBySE = (event: React.ChangeEvent) => {
    Filteredobjectarray = filter(ObjectArray, (c: TPrObject) => {
      if (c.hasOwnProperty('Myselist')) {
        return c.Myselist === event.toString();
      }
    });
    filterResetState();
  };
  const FilterByStatus = (event: React.ChangeEvent) => {
    Filteredobjectarray = filter(ObjectArray, (c: TPrObject) => {
      if (c.hasOwnProperty('Mystatuslist')) {
        return c.Mystatuslist === event.toString();
      }
    });
    filterResetState();
  };

  const inputUpdateButton = () => {
    resetState();
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
          setDateSorting={(newobjectarray: TPrObject[]) =>
            setDateSort(newobjectarray)
          }
          changeText={(event: string) => textChanged(event)}
          platformFilter={(event: React.ChangeEvent) => FilterByPlatform(event)}
          seListFilter={(event: React.ChangeEvent) => FilterBySE(event)}
          statusFilter={(event: React.ChangeEvent) => FilterByStatus(event)}
          arrayobject={ObjectArray}
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
                FilteredArrayObject={Filteredobjectarray}
                arrayobject={ObjectArray}
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
          arrayobjectval={ObjectArray}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Excel;
