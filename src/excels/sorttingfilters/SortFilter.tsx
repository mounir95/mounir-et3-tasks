import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {TPrObject} from '../../constants/UseContext';
import Filters from './filters/Filters';
import SortByDate from './sorts/SortByDate';

type Props = {
  setDateSorting: Function;
  filterPressed: Function;
  filterfalse: Boolean;
  changeText: Function;
  platformFilter: Function;
  seListFilter: Function;
  statusFilter: Function;
  arrayobject: TPrObject[];
};

const SortFilter: FC<Props> = ({
  setDateSorting,
  filterfalse,
  filterPressed,
  changeText,
  platformFilter,
  seListFilter,
  statusFilter,
  arrayobject,
}) => {
  const [{date, id}, setSatetDate] = useState({
    date: true,
    id: true,
  });
  const setDateSortingFun = (newobjectarray: TPrObject[]) => {
    setSatetDate({date: !date, id: !id});
    setDateSorting(newobjectarray);
  };
  return (
    <View>
      <Filters
        openfilter={filterfalse}
        pressfilter={filterPressed}
        textChanged={(event: string) => changeText(event)}
        filterPlatform={(event: React.ChangeEvent) => platformFilter(event)}
        filterSElist={(event: React.ChangeEvent) => seListFilter(event)}
        filterStatus={(event: React.ChangeEvent) => statusFilter(event)}
      />
      <View style={{marginTop: 5, backgroundColor: 'white'}}>
        <SortByDate
          setDate={(newobjectarray: TPrObject[]) =>
            setDateSortingFun(newobjectarray)
          }
          choosedfilter={date}
          arrayobject={arrayobject}
        />
      </View>
    </View>
  );
};

export default SortFilter;
