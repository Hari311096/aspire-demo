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
  titleText: {
    fontFamily: FontFamily.bold,
    color: colors.white,
    fontSize: 24,
    lineHeight: 32,
    paddingTop: 20
  },
  logoWrap: {},
  logoStyle: (type) => ({
    height: type === 'logo' ? 30 : 16,
    width: type === 'logo' ? 30 : 16
  }),
  subTitle: {
    fontFamily: FontFamily.medium,
    color: colors.white,
    fontSize: 14,
    lineHeight: 16
  },
  headerWrap: {
    padding: 20
  },
  backIcon: {
    fontFamily: FontFamily.medium,
    color: colors.white,
    fontSize: 22,
  },
  scrollWrap: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 30,
    padding: 20
  },
  titleWrap: {
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  inputWrap: {
    paddingTop: 15,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
    ...commonStyles.row,
  },
  currency: {
    fontFamily: FontFamily.bold,
    color: colors.white,
    fontSize: 12,
    lineHeight: 16
  },
  currencyWrap: {
    backgroundColor: colors.secondary,
    borderRadius: 4,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 10
  },
  textInputStyle: {
    flex: 1,
    fontFamily: FontFamily.bold,
    color: '#222222',
    fontSize: 24,
    lineHeight: 33,
  },
  helpingText: {
    fontFamily: FontFamily.regular,
    fontSize: 13,
    color: '#22222266',
    paddingTop: 5
  },
  suggestionsWrap: {
    ...commonStyles.row,
    paddingTop: 20
  },
  singleSuggestion: {
    backgroundColor: 'rgba(32, 209, 113, 0.07)',
    borderRadius: 5,
    paddingVertical: 10,
    width: '31%',
    ...commonStyles.center
  },
  amountStyle: {
    fontFamily: FontFamily.demiBold,
    fontSize: 12,
    color: colors.secondary,
    lineHeight: 16
  },
  buttonStyle: (isDisable) => ({
    width: '90%',
    backgroundColor: isDisable ? '#EEEEEE' : colors.secondary,
    height: 55,
    shadowColor: "#0000001F",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    ...commonStyles.center,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 15
  }),
  buttonTitle: {
    fontFamily: FontFamily.demiBold,
    fontSize: 16,
    color: colors.white,
    lineHeight: 20
  }
});

export default styles;