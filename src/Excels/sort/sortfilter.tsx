import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SortByDate from './sortbydate';

type Props = {
  setDateSorting: Function;
  filterPressed: Function;
  filterfalse: Boolean;
};

const SortFilter: FC<Props> = ({setDateSorting, filterfalse, filterPressed}) => {
    const xxx = () => {
        filterPressed();
    }
  return (
    <View style={{marginBottom: 15, backgroundColor: 'lavender'}}>
      <TouchableOpacity
        style={{
          paddingVertical: 3,
          paddingHorizontal: 3,
          backgroundColor: 'white',
        }}
        onPress={() => xxx()}>
        {filterfalse && (
          <FontAwesome
            style={{textAlign: 'right'}}
            name="window-minimize"
            size={15}
            color="#900"
          />
        )}
        {!filterfalse && (
          <Icon
            style={{textAlign: 'right'}}
            name="md-add"
            size={20}
            color="#900"
          />
        )}
      </TouchableOpacity>
      {filterfalse && (
        <View>
          <SortByDate
            setDate={(newobjectarray: object) => setDateSorting(newobjectarray)}
          />
        </View>
      )}
    </View>
  );
};

export default SortFilter;
