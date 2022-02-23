import React, {FC} from 'react';
import {View} from 'react-native';
import SSDListInput from './SSDLists';
import {TPrObject} from '../../constants/UseContext';

type Props = {
  updatedid: number;
  openssdlists: Boolean;
  toSSDLists: Function;
  objectval: TPrObject;
  arrayobjectval: TPrObject[];
};

const SSDListInputSumit: FC<Props> = ({
  updatedid,
  openssdlists,
  toSSDLists,
  objectval,
  arrayobjectval
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
      {openssdlists && (
        <SSDListInput
          updatedid={updatedid}
          SSDLists={() => toSSDLists()}
          objectval={objectval}
          arrayobjectval={arrayobjectval}
        />
      )}
    </View>
  );
};

export default SSDListInputSumit;
