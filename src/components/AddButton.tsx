import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Dialog, {DialogTitle, DialogContent} from 'react-native-popup-dialog';
import getAddPageStore from '../stores/AddPageStore';
import getGlobalObjectStore from '../stores/GlobalObjectStore';
import {observer} from 'mobx-react';
import getRequiredStore from '../stores/RequiredStore';
import getLanguageStore from '../stores/LanguageStore';
import {colors, windowWidth} from '../constants/constants';

const AddButton = observer(() => {
  getAddPageStore().addtext.set(getLanguageStore.get('addtext'));
  const onPressSubmit = () => {
    if (getAddPageStore().addtext.get() === getLanguageStore.get('closetext')) {
      getAddPageStore().openInputForm();
    } else {
      getAddPageStore().closeInputForm();
      getRequiredStore().resetValidationTrue();
    }
    getGlobalObjectStore().orderingArrayOfObject();
    getGlobalObjectStore().clearemptyObject();
  };

  React.useEffect(() => {
    setInterval(async () => {
      getGlobalObjectStore().ShowPopUp.set(true);
      setTimeout(() => {
        getGlobalObjectStore().ShowPopUp.set(false);
      }, 5 * 2 * 1000);
    }, 5 * 60 * 1000);
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => getLanguageStore.setLanguage('ENG')}>
          <Text
            style={{
              borderWidth: windowWidth * 0.006,
              borderRadius: windowWidth * 0.013,
              padding: windowWidth * 0.013,
              marginBottom: windowWidth * 0.013,
              borderColor: colors.lightpurple,
              color: colors.lightpurple,
              backgroundColor: colors.white,
            }}>
            {getLanguageStore.get('enlang')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => getLanguageStore.setLanguage('AR')}>
          <Text
            style={{
              borderWidth: windowWidth * 0.006,
              borderRadius: windowWidth * 0.013,
              padding: windowWidth * 0.013,
              marginBottom: windowWidth * 0.013,
              borderColor: colors.lightpurple,
              color: colors.lightpurple,
              backgroundColor: colors.white,
            }}>
            {getLanguageStore.get('arlang')}
          </Text>
        </TouchableOpacity>
        <Dialog
          visible={getGlobalObjectStore().ShowPopUp.get()}
          dialogTitle={<DialogTitle title="PRS" />}>
          <DialogContent>
            <Text>
              {getLanguageStore.get('prcount')}
              {getGlobalObjectStore().lastIndexpopUp.get()}
            </Text>
          </DialogContent>
        </Dialog>
      </View>
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
