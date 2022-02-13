import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isIphoneX = DeviceInfo.hasNotch() && Platform.OS === 'ios';
