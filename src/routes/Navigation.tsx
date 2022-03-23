import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Excel from '../components/Excel/Excel';
import ADDPage from '../components/AddPage/ADDPage';
import getLanguageStore from '../stores/LanguageStore';
import {observer} from 'mobx-react';
import {Lang} from './lang';

const Drawer = createDrawerNavigator();

const MyNavStack = observer(() => {
  return (
    <Drawer.Navigator initialRouteName={getLanguageStore.get('excel')}>
      <Drawer.Screen name={getLanguageStore.get('excel')} component={Excel} />
      <Drawer.Screen
        name={getLanguageStore.get('addpage')}
        component={ADDPage}
      />
      <Drawer.Screen
        name={getLanguageStore.get('translation')}
        component={Lang}
      />
    </Drawer.Navigator>
  );
});

export default MyNavStack;
