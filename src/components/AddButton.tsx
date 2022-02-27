import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {AddPageMobx} from '../constants/UseContext';
import globalObj from '../constants/ObjectStore';
import {observer} from 'mobx-react';

const AddButton = observer(() => {
  const onPressSubmit = () => {
    if (AddPageMobx.addtext === 'Close') {
      AddPageMobx.setAddPageMobx();
    } else {
      AddPageMobx.resetAddPageMobx();
    }
    globalObj.setAllChanges();
    globalObj.resetObject();
  };

  return (
    <View style={{alignItems: 'center'}}>
      {AddPageMobx.addbuttontrue && (
        <TouchableOpacity onPress={() => onPressSubmit()}>
          <Text
            style={{
              borderWidth: 2,
              borderRadius: 25,
              padding: 10,
              marginBottom: 10,
              borderColor: '#776677',
              color: '#776677',
              backgroundColor: 'white',
            }}>
            {AddPageMobx.addtext}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
});

export default AddButton;
