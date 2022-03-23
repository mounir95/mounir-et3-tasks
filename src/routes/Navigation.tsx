import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Excel from '../components/Excel/Excel';
import ADDPage from '../components/AddPage/ADDPage';
import {TouchableOpacity, View, Text} from 'react-native';
import getLanguageStore from '../stores/LanguageStore';
import {colors, windowWidth} from '../constants/constants';
import {observer} from 'mobx-react';

const Drawer = createDrawerNavigator();
const Lang = observer(() => {
  return (
    <View
      style={{
        flexDirection: 'column',
        margin: windowWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text>{getLanguageStore.get('textinlang')}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => getLanguageStore.setLanguage('ENG')}>
          <Text
            style={{
              margin: windowWidth * 0.03,
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
              margin: windowWidth * 0.03,
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
      </View>
    </View>
  );
});

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
