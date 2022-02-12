/**
 * @format
 */

import { enableScreens } from 'react-native-screens';
import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

enableScreens();
AppRegistry.registerComponent(appName, () => App);
