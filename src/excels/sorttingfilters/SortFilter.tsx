import React, {FC, useState} from 'react';
import {View} from 'react-native';
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
};

const SortFilter: FC<Props> = ({
  setDateSorting,
  filterfalse,
  filterPressed,
  changeText,
  platformFilter,
  seListFilter,
  statusFilter,
}) => {
  const [{date}, setSatetDate] = useState({
    date: true,
  });
  const setDateSortingFun = (newobjectarray: object) => {
    setSatetDate({date: !date});
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
          setDate={(newobjectarray: object) =>
            setDateSortingFun(newobjectarray)
          }
          choosedfilter={date}
        />
      </View>
    </View>
  );
};

export default SortFilter;
