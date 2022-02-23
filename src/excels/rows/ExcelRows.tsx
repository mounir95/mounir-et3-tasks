import React, {FC} from 'react';
import {View} from 'react-native';
import ExcelRowInput from './ExcelRowInput';
import FilteredRows from './FilteredRows';
import {TPrObject} from '../../constants/UseContext';
import filter from 'lodash/filter';

type Props = {
  filtertrue: Boolean;
  updatedid: number;
  onUpdateSub: Function;
  onDeletSub: Function;
  index: number;
  FilteredArrayObject: {}[];
  arrayobject: TPrObject[];
};
const ExcelRows: FC<Props> = ({
  filtertrue,
  updatedid,
  onUpdateSub,
  onDeletSub,
  index,
  FilteredArrayObject,
  arrayobject,
}) => {
  let arrayofobjects = filter(arrayobject, (c: TPrObject) => {
    return c.Myid > 0;
  });
  let arrayoffilteredobjects = FilteredArrayObject;

  return (
    <View>
      {!filtertrue &&
        arrayofobjects.map((e: TPrObject) => {
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
        arrayoffilteredobjects.map((e: TPrObject) => {
          if (e.hasOwnProperty('Mycomment')) {
            return <FilteredRows object={e} index={index} />;
          }
        })}
    </View>
  );
};

export default ExcelRows;
