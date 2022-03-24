import React from 'react';
import {ScrollView, View} from 'react-native';
import AddButton from './AddButton';
import InputForm from './input/InputForm';
import {observer} from 'mobx-react';

const ADDPage = observer(() => {
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
