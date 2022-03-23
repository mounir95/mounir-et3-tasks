import {observer} from 'mobx-react';
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {colors, windowWidth} from '../constants/constants';
import getLanguageStore from '../stores/LanguageStore';

export const Lang = observer(() => {
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
