import React from 'react';
import {ScrollView, View} from 'react-native';
import AddButton from './AddButton';
import InputForm from './input/InputForm';
import {observer} from 'mobx-react';
import getLanguageStore from '../../stores/LanguageStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {runInAction} from 'mobx';

const ADDPage = observer(() => {
  React.useEffect(() => {
    runInAction(() => {
      async () => {
        const value = await AsyncStorage.getItem('language');
        if (value !== null) {
          getLanguageStore.language.set(value);
        } else {
          await AsyncStorage.setItem('language', 'ENG');
          getLanguageStore.language.set('EN');
        }
      };
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <InputForm />
      </ScrollView>
      <AddButton />
    </View>
  );
});

export default ADDPage;
