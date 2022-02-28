import React, {FC} from 'react';
import {View} from 'react-native';
import ExcelRowInput from './ExcelRowInput';
import FilteredRows from './FilteredRows';
import {TPrObject} from '../../constant/constants';
import {excelMobx} from '../../stores/ExcelStore';
import filter from 'lodash/filter';
import globalObject from '../../stores/GlobalObjectStore';
import {observer} from 'mobx-react';

type Props = {
  index: number;
};
const ExcelRows: FC<Props> = observer(({index}) => {
  const arrayofobjects = filter(globalObject.arrayofobjects, (c: TPrObject) => {
    return c.Myid > 0;
  });

  return (
    <View>
      {!excelMobx.filterfalse &&
        arrayofobjects.map((e: TPrObject) => {
          if (e.hasOwnProperty('Mycomment')) {
            return <ExcelRowInput object={e} index={index} />;
          }
        })}
      {excelMobx.filterfalse &&
        globalObject.filteredarrayofobjects.map((e: TPrObject) => {
          if (e.hasOwnProperty('Mycomment')) {
            return <FilteredRows object={e} index={index} />;
          }
        })}
    </View>
  );
});

export default ExcelRows;
