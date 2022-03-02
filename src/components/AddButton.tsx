import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import getAddPageStore from '../stores/AddPageStore';
import getGlobalObjectStore from '../stores/GlobalObjectStore';
import {observer} from 'mobx-react';
import getRequiredStore from '../stores/RequiredStore';

const AddButton = observer(() => {
  const onPressSubmit = () => {
    if (getAddPageStore().addtext.get() === 'Close') {
      getAddPageStore().openInputForm();
    } else {
      getAddPageStore().closeInputForm();
      getRequiredStore().resetValidationTrue();
    }
    getGlobalObjectStore().orderingArrayOfObject();
    getGlobalObjectStore().clearemptyObject();
  };

  const changeLanguage = (val: string) => {
    console.log(val);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => changeLanguage('EN')}>
          <Text
            style={{
              borderWidth: 2,
              borderRadius: 5,
              padding: 5,
              marginBottom: 5,
              borderColor: '#776677',
              color: '#776677',
              backgroundColor: 'white',
            }}>
            EN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('AR')}>
          <Text
            style={{
              borderWidth: 2,
              borderRadius: 5,
              padding: 5,
              marginBottom: 5,
              borderColor: '#776677',
              color: '#776677',
              backgroundColor: 'white',
            }}>
            AR
          </Text>
        </TouchableOpacity>
      </View>
      {getAddPageStore().addbuttontrue.get() && (
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
            {getAddPageStore().addtext.get()}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
});

export default AddButton;
