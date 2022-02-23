import React, {FC} from 'react';
import {View} from 'react-native';
import {TPrObject} from '../../constants/UseContext';
import InputText from './TextInput';

type Props = {
  updatedid: number;
  opentextpage: Boolean;
  toTextPage: Function;
  objectval: TPrObject;
  arrayobjectval: TPrObject[];
};

const InputTextSumit: FC<Props> = ({
  updatedid,
  opentextpage,
  toTextPage,
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
      {opentextpage && (
        <InputText
          idupdate={updatedid}
          TextPage={() => toTextPage()}
          objectval={objectval}
          arrayobjectval={arrayobjectval}
        />
      )}
    </View>
  );
};

export default InputTextSumit;
