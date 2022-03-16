import React from 'react';
import {ScrollView, View, Button} from 'react-native';
import AddButton from './AddButton';
import InputForm from './input/InputForm';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import getAddPageStore from '../../stores/AddPageStore';
import {observer} from 'mobx-react';
import getLanguageStore from '../../stores/LanguageStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    console.log('ipconfig | find "IPv4 Address" > getip.txt')
    fetch('../../../../test/getip.txt')
      .then(async res => await res.text())
      .then(async data => {
        console.log(await data);
      });
    const getDefaultLang = async () => {
      const value = await AsyncStorage.getItem('language');
      if (value !== null) {
        getLanguageStore.language.set(value);
      } else {
        await AsyncStorage.setItem('language', 'ENG');
        getLanguageStore.language.set('EN');
      }
    };
    getDefaultLang();
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
