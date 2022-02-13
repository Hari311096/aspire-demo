import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { FontFamily } from '../../config/commonStyles';

const styles = StyleSheet.create({
  mainWrap: {},
  cardContentWrap: {
    // height: 220,
    width: '100%',
    backgroundColor: colors.secondary,
    padding: 20,
    borderRadius: 8,
    marginTop: -80,
    zIndex: 100
  },
  logoWrapStyle: {
    alignSelf: 'flex-end'
  },
  logoStyle: (type) => ({
    width: type === 'visa' ? 60 : 75,
    height: 22,
  }),
  cardDetailsWrap: {
    paddingTop: 25
  },
  cardHolderNameStyle: {
    fontFamily: FontFamily.bold,
    fontSize: 22,
    letterSpacing: 0.53,
    color: colors.white
  },
  cardNumberStyle: {
    fontFamily: FontFamily.demiBold,
    fontSize: 14,
    letterSpacing: 3.46,
    color: colors.white,
    lineHeight: 19,
  },
  dateText: {
    fontFamily: FontFamily.demiBold,
    fontSize: 13,
    letterSpacing: 1.56,
    color: colors.white,
    lineHeight: 18,
    paddingTop: 12
  },
  buttonWrap: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 10,
    // paddingBottom: 5,
    position: 'absolute',
    top: -112,
    right: 2,
    zIndex: 10
  },
  eyeIcon: {
    height: 17,
    width: 17
  },
  buttonTitle: {
    fontFamily: FontFamily.demiBold,
    fontSize: 12,
    color: colors.secondary,
    lineHeight: 20,
    paddingLeft: 5
  }
});

export default styles;
