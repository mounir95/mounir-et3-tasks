import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Excel from '../components/Excel';
import ADDPage from '../components/ADDPage';

const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ADDPage" component={ADDPage} />
      <Stack.Screen name="Excel" component={Excel} />
    </Stack.Navigator>
  );
};

export default MyHomeStack;
