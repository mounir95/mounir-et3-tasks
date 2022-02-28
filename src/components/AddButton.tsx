import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {addPageMobx} from '../stores/AddPageStore';
import globalObject from '../stores/GlobalObjectStore';
import {observer} from 'mobx-react';

const AddButton = observer(() => {
  const onPressSubmit = () => {
    if (addPageMobx.addtext === 'Close') {
      addPageMobx.setAddPageMobx();
    } else {
      addPageMobx.resetAddPageMobx();
    }
    globalObject.setAllChanges();
    globalObject.resetObject();
  };

  return (
    <View style={{alignItems: 'center'}}>
      {addPageMobx.addbuttontrue && (
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
            {addPageMobx.addtext}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
});

export default AddButton;
