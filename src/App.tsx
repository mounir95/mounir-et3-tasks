import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyNavStack from './routes/Navigation';
import getLanguageStore from './stores/LanguageStore';
import getGlobalObjectStore from './stores/GlobalObjectStore';
import Dialog, {DialogTitle, DialogContent} from 'react-native-popup-dialog';
import {Text} from 'react-native';
import {observer} from 'mobx-react';

const App = observer(() => {
  React.useEffect(() => {
    setInterval(async () => {
      getGlobalObjectStore().ShowPopUpFun(true);
      setTimeout(() => {
        getGlobalObjectStore().ShowPopUpFun(false);
      }, 5 * 2 * 1000);
    }, 5 * 60 * 1000);
  }, []);

  return (
    <>
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
      <NavigationContainer>
        <MyNavStack />
      </NavigationContainer>
    </>
  );
});

export default App;
