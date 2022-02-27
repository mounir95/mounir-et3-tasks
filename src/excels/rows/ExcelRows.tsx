import React, {FC} from 'react';
import {View} from 'react-native';
import ExcelRowInput from './ExcelRowInput';
import FilteredRows from './FilteredRows';
import {ExcelMobx, TPrObject} from '../../constants/UseContext';
import filter from 'lodash/filter';
import globalObj from '../../constants/ObjectStore';
import {observer} from 'mobx-react';

type Props = {
  index: number;
};
const ExcelRows: FC<Props> = observer(({index}) => {
  const arrayofobjects = filter(globalObj.arrayofobjects, (c: TPrObject) => {
    return c.Myid > 0;
  });

  return (
    <View>
      {!ExcelMobx.filterfalse &&
        arrayofobjects.map((e: TPrObject) => {
          if (e.hasOwnProperty('Mycomment')) {
            return <ExcelRowInput object={e} index={index} />;
          }
        })}
      {ExcelMobx.filterfalse &&
        globalObj.filteredarrayofobjects.map((e: TPrObject) => {
          if (e.hasOwnProperty('Mycomment')) {
            return <FilteredRows object={e} index={index} />;
          }
        })}
    </View>
  );
});

export default ExcelRows;
