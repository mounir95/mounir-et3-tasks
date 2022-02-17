import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Excel from '../components/Excel';
import ADDPage from '../components/ADDPage';

const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Page" component={ADDPage} />
      <Stack.Screen name="Excel Page" component={Excel} />
    </Stack.Navigator>
  );
}

export default MyHomeStack;
