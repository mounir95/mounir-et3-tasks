import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import getAddPageStore from '../../stores/AddPageStore';
import getGlobalObjectStore from '../../stores/GlobalObjectStore';
import {observer} from 'mobx-react';
import getRequiredStore from '../../stores/RequiredStore';
import getLanguageStore from '../../stores/LanguageStore';
import {colors, windowWidth} from '../../constants/constants';
import getSqlQueryStore from '../../stores/SqlQuery';

const AddButton = observer(() => {
  getLanguageStore.setrunInAction(getAddPageStore().addtext, 'addtext');
  const onPressSubmit = () => {
    getSqlQueryStore().sqlGetid();
    if (getAddPageStore().addtext.get() === getLanguageStore.get('closetext')) {
      getAddPageStore().openInputForm();
    } else {
      getAddPageStore().closeInputForm();
      getRequiredStore().resetValidationTrue();
    }
    getGlobalObjectStore().clearemptyObject();
  };

  return (
    <View style={{alignItems: 'center'}}>
      {getAddPageStore().addbuttontrue.get() && (
        <TouchableOpacity onPress={() => onPressSubmit()}>
          <Text
            style={{
              borderWidth: windowWidth * 0.006,
              borderRadius: windowWidth * 0.07,
              padding: windowWidth * 0.03,
              marginBottom: windowWidth * 0.03,
              borderColor: colors.lightpurple,
              color: colors.lightpurple,
              backgroundColor: colors.white,
            }}>
            {getAddPageStore().addtext.get()}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
});

export default AddButton;
