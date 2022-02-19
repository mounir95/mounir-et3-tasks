import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyHomeStack from './routes/HomeStack'

const App = () => {
  return (
    <NavigationContainer>
      <MyHomeStack />
    </NavigationContainer>
  );
};

export default App;
