import React from 'react';
import {ScrollView, View, Button} from 'react-native';
import AddButton from './AddButton';
import InputForm from '../input/InputForm';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {addPageMobx} from '../stores/AddPageStore';
import {observer} from 'mobx-react';

type RootStackParamList = {
  Excel: undefined;
};
type mainScreenProp = StackNavigationProp<RootStackParamList, 'Excel'>;

const ADDPage = observer(() => {
  const navigation = useNavigation<mainScreenProp>();

  const checkTableIssue = () => {
    addPageMobx.setAddPageMobx();
    navigation.navigate('Excel');
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <InputForm />
      </ScrollView>
      <AddButton />
      <Button title="Check the table Issue" onPress={() => checkTableIssue()} />
    </View>
  );
});

export default ADDPage;
