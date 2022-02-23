import React, {FC} from 'react';
import {View} from 'react-native';
import {TPrObject} from '../../constants/UseContext';
import InputSelectList from './SelectList';

type Props = {
  updatedid: number;
  openselectpage: Boolean;
  toSelectList: Function;
  objectval: TPrObject;
  arrayobjectval: TPrObject[];
};

const InputSelectListSumit: FC<Props> = ({
  updatedid,
  openselectpage,
  toSelectList,
  objectval,
  arrayobjectval,
}) => {
  return (
    <View
      style={{
        width: '90%',
        // height: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'yellow',
        margin: 5
      }}>
      {openselectpage && (
        <InputSelectList
          updatedid={updatedid}
          SelectList={() => toSelectList()}
          objectval={objectval}
          arrayobjectval={arrayobjectval}
        />
      )}
    </View>
  );
};

export default InputSelectListSumit;
