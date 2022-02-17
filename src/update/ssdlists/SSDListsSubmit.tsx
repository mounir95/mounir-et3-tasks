import React, {FC} from 'react';
import {View} from 'react-native';
import SSDListInput from './SSDLists';

type Props = {
  openssdlists: Boolean;
  toSSDLists: Function;
};

const SSDListInputSumit: FC<Props> = ({openssdlists, toSSDLists}) => {
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
      {openssdlists && <SSDListInput SSDLists={() => toSSDLists()} />}
    </View>
  );
};

export default SSDListInputSumit;
