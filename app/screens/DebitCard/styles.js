import { StyleSheet } from 'react-native';
import colors from '../../config/colors'
import { commonStyles, FontFamily } from '../../config/commonStyles';
import { isIphoneX } from '../../config/constants';

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: isIphoneX ? 40 : 20
  },
  cardDetails: {
    padding: 20,
    paddingTop: isIphoneX ? 40 : 30,
    flex: 1,
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  titleText: {
    fontFamily: FontFamily.bold,
    color: colors.white,
    fontSize: 24,
    lineHeight: 32
  },
  logoWrap: {
    alignSelf: 'flex-end'
  },
  logoStyle: {
    height: 30,
    width: 30
  },
  subTitle: {
    fontFamily: FontFamily.medium,
    color: colors.white,
    fontSize: 14,
    lineHeight: 16
  },
  cardBalanceDetails: {
    paddingTop: 25
  },
  scrollWrap: {
    flex: 1,
    paddingTop: 250,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentWrap: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 250
  },
  currency: {
    fontFamily: FontFamily.bold,
    color: colors.white,
    fontSize: 12,
    lineHeight: 16
  },
  currencyWrap: {
    backgroundColor: colors.secondary,
    borderRadius:4,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 10
  },
  balanceWrap: {
    paddingTop: 10,
    justifyContent: 'flex-start'
  },
  priceLimitHeaderWrap: {
    ...commonStyles.row,
    paddingBottom: 7
  },
  priceLimitHeader: {
    fontFamily: FontFamily.medium,
    color: '#222',
    fontSize: 13,
    lineHeight: 18
  },
  priceLimit: {
    fontFamily: FontFamily.demiBold,
    color: colors.secondary,
  }
});

export default styles;
