import { StyleSheet } from 'react-native';
import colors from './colors';

export const FontFamily = {
  bold: 'AvenirNext-Bold',
  demiBold: 'AvenirNext-DemiBold',
  medium: 'AvenirNext-Medium',
  regular: 'AvenirNext-Regular',
};

// Define all common styles of app here
export const commonStyles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});