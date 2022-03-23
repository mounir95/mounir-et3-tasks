import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyNavStack from './routes/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MyNavStack />
    </NavigationContainer>
  );
};

export default App;
