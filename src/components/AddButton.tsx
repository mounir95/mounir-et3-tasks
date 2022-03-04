import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Dialog, {DialogTitle, DialogContent} from 'react-native-popup-dialog';
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
        <Dialog
          visible={getGlobalObjectStore().ShowPopUp.get()}
          dialogTitle={<DialogTitle title="PRS" />}>
          <DialogContent>
            <Text>
              The PRS Count is : {getGlobalObjectStore().lastIndexpopUp.get()}
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
