import React, { FC } from 'react';
import { View } from 'react-native';
import ExcelRowInput from './ExcelRowInput';
import FilteredRows from './FilteredRows';
import { FilteredObjectArray, ObjectArray } from '../../App';

type Props = {
  filtertrue: Boolean;
  updatedid: number;
  onUpdateSub: Function;
  onDeletSub: Function;
  index: number;
};
const ExcelRows: FC<Props> = ({
  filtertrue,
  updatedid,
  onUpdateSub,
  onDeletSub,
  index,
}) => {
  let arrayofobjects = ObjectArray._currentValue;
  let arrayoffilteredobjects = FilteredObjectArray._currentValue;

  return (
    <View>
      {!filtertrue &&
        arrayofobjects.map(e => {
          if (e.hasOwnProperty('Mycomment')) {
            return (
              <ExcelRowInput
                updateiconid={updatedid}
                onUpdate={(objid: number) => onUpdateSub(objid)}
                onDelete={(objid: number) => onDeletSub(objid)}
                object={e}
                index={index}
              />
            );
          }
        })}
      {filtertrue &&
        arrayoffilteredobjects.map(e => {
          if (e.hasOwnProperty('Mycomment')) {
            return <FilteredRows object={e} index={index} />;
          }
        })}
    </View>
  );
};

export default ExcelRows;
