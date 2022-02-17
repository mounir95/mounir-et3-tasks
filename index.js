/**
 * @format
 */

<<<<<<< HEAD
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
=======
import { AppRegistry } from 'react-native';
import App from './build/App';
import { name as appName } from './app.json';
>>>>>>> 46f3ab8092a082d2f5b82438f7cd62d261cd4f3e

AppRegistry.registerComponent(appName, () => App);