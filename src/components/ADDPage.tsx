import React from 'react';
import {ScrollView, View, Button} from 'react-native';
import AddButton from './AddButton';
import InputForm from '../input/InputForm';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import getAddPageStore from '../stores/AddPageStore';
import {observer} from 'mobx-react';
import getLanguageStore from '../stores/LanguageStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getGlobalObjectStore from '../stores/GlobalObjectStore';

type RootStackParamList = {
  Excel: undefined;
};
type mainScreenProp = StackNavigationProp<RootStackParamList, 'Excel'>;

const ADDPage = observer(() => {
  const navigation = useNavigation<mainScreenProp>();
  const checkTableIssue = () => {
    getAddPageStore().openInputForm();
    navigation.navigate('Excel');
  };
  
  React.useEffect(() => {
    const getDefaultLang = async () => {
      const value = await AsyncStorage.getItem('language');
      if (value !== null) {
        getLanguageStore.language.set(value);
      } else {
        await AsyncStorage.setItem('language', 'ENG');
        getLanguageStore.language.set('EN');
      }
    };
    const getDefaultObj = async () => {
      const jsonValue = await AsyncStorage.getItem('object');
      if (jsonValue !== null) {
        getGlobalObjectStore().arrayofobjects.set(JSON.parse(jsonValue));
      } else {
        const jsonValue = JSON.stringify([]);
        await AsyncStorage.setItem('object', jsonValue);
      }
    };
    getDefaultLang();
    getDefaultObj();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <InputForm />
      </ScrollView>
      <AddButton />
      <Button
        title={getLanguageStore.get('checktable')}
        onPress={() => checkTableIssue()}
      />
    </View>
  );
});

export default ADDPage;
