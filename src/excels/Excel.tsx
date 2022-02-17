import React, {FC} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import FirstRow from './ExcelRowFirst';
import {days} from '../constants/UseContext';
import SortFilter from './sorttingfilters/SortFilter';
import ExcelRows from './rows/ExcelRows';

type Props = {
  updateiconid: number;
  openfilter: Boolean;
  filterPress: Function;
  dateSort: Function;
  onUpdate: Function;
  onDelete: Function;
  textChanged: Function;
  FilterByPlatform: Function;
  FilterBySE: Function;
  FilterByStatus: Function;
};

const Excel: FC<Props> = ({
  updateiconid,
  openfilter,
  filterPress,
  dateSort,
  onUpdate,
  onDelete,
  textChanged,
  FilterByPlatform,
  FilterBySE,
  FilterByStatus
}) => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 22}}>
      <SortFilter
        filterPressed={() => filterPress()}
        filterfalse={openfilter}
        setDateSorting={(newobjectarray: object) => dateSort(newobjectarray)}
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
              filtertrue={openfilter}
              updatedid={updateiconid}
              onUpdateSub={(objid: number) => onUpdate(objid)}
              onDeletSub={(objid: number) => onDelete(objid)}
              index={index}
            />
          </View>
        )}
        keyExtractor={item => item.name}
        extraData={days}
      />
    </SafeAreaView>
  );
};

export default Excel;
