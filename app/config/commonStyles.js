import { StyleSheet } from 'react-native';

// Define all common styles of app here
export const commonStyles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});