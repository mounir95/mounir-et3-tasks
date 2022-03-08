import React from 'react';
import {ScrollView, View, Button} from 'react-native';
import AddButton from './AddButton';
import InputForm from '../input/InputForm';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import getAddPageStore from '../stores/AddPageStore';
import {observer} from 'mobx-react';
import getLanguageStore from '../stores/LanguageStore';

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

  getLanguageStore.setAsyncData();

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
