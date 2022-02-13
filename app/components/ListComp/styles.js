import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { FontFamily } from '../../config/commonStyles';

const styles = StyleSheet.create({
  listWrap: {
    // flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 15
  },
  titleStyle: {
    fontSize: 14,
    fontFamily: FontFamily.medium,
    color: colors.titleColor
  },
  subTitleStyle: {
    fontSize: 13,
    fontFamily: FontFamily.regular,
    color: 'rgba(34,34,34,0.4)'
  },
});

export default styles;
