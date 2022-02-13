import React from 'react';
import { View, Text, Image, Switch } from 'react-native';
import { commonStyles } from '../../config/commonStyles';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import colors from '../../config/colors';

/**
 * 
 * @returns - List component design
 */
export default function ListComp(props) {
  const {
    listIcon = logo, listIconStyle, mainWrapStyle, isSwitchVisible,
    switchStyle, title = 'Title', subTitle = 'Sub title', onSwitchValueChange, isSwitchOn
  } = props;

  return (
    <View style={[commonStyles.row, styles.listWrap, mainWrapStyle]}>
      <Image resizeMode="contain" source={listIcon} style={styles.imageStyle, listIconStyle} />
      <View style={{ paddingLeft: 10, flex: 1 }}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.subTitleStyle}>{subTitle}</Text>
      </View>
      {isSwitchVisible && (
        <Switch
          trackColor={{ false: "#EEEEEE", true: colors.secondary }}
          style={[{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }, switchStyle]}
          onValueChange={onSwitchValueChange}
          value={isSwitchOn}
          ios_backgroundColor='#EEEEEE'
        />
      )}
    </View>
  )
}
