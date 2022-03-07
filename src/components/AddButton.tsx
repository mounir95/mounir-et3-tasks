import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Dialog, {DialogTitle, DialogContent} from 'react-native-popup-dialog';
import getAddPageStore from '../stores/AddPageStore';
import getGlobalObjectStore from '../stores/GlobalObjectStore';
import {observer} from 'mobx-react';
import getRequiredStore from '../stores/RequiredStore';
import getLanguageStore from '../stores/LanguageStore';

const AddButton = observer(() => {
  getAddPageStore().addtext.set(
    getLanguageStore().translatedlang.get().addtext,
  );
  const onPressSubmit = () => {
    if (
      getAddPageStore().addtext.get() ===
      getLanguageStore().translatedlang.get().closetext
    ) {
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
        <TouchableOpacity onPress={() => getLanguageStore().setLanguage('EN')}>
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
            {getLanguageStore().translatedlang.get().enlang}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => getLanguageStore().setLanguage('AR')}>
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
            {getLanguageStore().translatedlang.get().arlang}
          </Text>
        </TouchableOpacity>
        <Dialog
          visible={getGlobalObjectStore().ShowPopUp.get()}
          dialogTitle={<DialogTitle title="PRS" />}>
          <DialogContent>
            <Text>
              {getLanguageStore().translatedlang.get().prcount}
              {getGlobalObjectStore().lastIndexpopUp.get()}
            </Text>
          </DialogContent>
        </Dialog>
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
