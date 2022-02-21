import React, {FC} from 'react';
import {View} from 'react-native';
import SSDListInput from './SSDLists';

type Props = {
  updatedid: number;
  openssdlists: Boolean;
  toSSDLists: Function;
};

const SSDListInputSumit: FC<Props> = ({
  updatedid,
  openssdlists,
  toSSDLists,
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
        <SSDListInput updatedid={updatedid} SSDLists={() => toSSDLists()} />
      )}
    </View>
  );
};

export default SSDListInputSumit;
