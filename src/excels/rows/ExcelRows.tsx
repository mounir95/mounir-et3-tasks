import React, {FC} from 'react';
import {View} from 'react-native';
import ExcelRowInput from './ExcelRowInput';
import FilteredRows from './FilteredRows';
import {TPrObject} from '../../interfaces/interfaces';
import getExcelStore from '../../stores/ExcelStore';
import filter from 'lodash/filter';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';
import {observer} from 'mobx-react';

type Props = {
  index: number;
};
const ExcelRows: FC<Props> = observer(({index}) => {
  const arrayofobjects = filter(
    getGlobalObjectStore().arrayofobjects.get(),
    (c: TPrObject) => {
      return c.Myid > 0;
    },
  );

  return (
    <View>
      {!getExcelStore().filterfalse.get() &&
        arrayofobjects.map((e: TPrObject) => {
          if (e.hasOwnProperty('Mycomment')) {
            return <ExcelRowInput object={e} index={index} />;
          }
        })}
      {getExcelStore().filterfalse.get() &&
        getGlobalObjectStore()
          .filteredarrayofobjects.get()
          .map((e: TPrObject) => {
            if (e.hasOwnProperty('Mycomment')) {
              return <FilteredRows object={e} index={index} />;
            }
          })}
    </View>
  );
});

export default ExcelRows;
