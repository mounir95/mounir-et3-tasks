import React, {FC} from 'react';
import {View} from 'react-native';
import InputSelectList from './SelectList';

type Props = {
  updatedid: number;
  openselectpage: Boolean;
  toSelectList: Function;
};

const InputSelectListSumit: FC<Props> = ({
  updatedid,
  openselectpage,
  toSelectList,
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
        />
      )}
    </View>
  );
};

export default InputSelectListSumit;
