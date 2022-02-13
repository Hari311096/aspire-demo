import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import aspireLogo from '../../assets/images/aspireLogo.png'
import visa from '../../assets/images/visa.png'
import showEye from '../../assets/images/showEye.png'
import hideEye from '../../assets/images/hideEye.png'
import { commonStyles } from '../../config/commonStyles'

/**
 * 
 * @returns - Design of card component
 */
export default function CardComp() {
  const [showCardNumber, setShowVardNumber] = useState(true);
  const cardNumber = '5647341124132020';
  const last4 = cardNumber.substring(cardNumber.length - 4);
  const eyeIcon = showCardNumber ? hideEye : showEye;
  const buttonTitle = showCardNumber ? 'Hide card number' : 'Show card number';
  return (
    <View style={styles.mainWrap}>
      <View style={styles.cardContentWrap}>
        <View style={styles.logoWrapStyle} >
          <Image resizeMode="contain" source={aspireLogo} style={styles.logoStyle('logo')} />
        </View>
        <View style={styles.cardDetailsWrap}>
          <Text style={styles.cardHolderNameStyle}>Mark Henry</Text>
          <View style={styles.cardDetailsWrap}>
            {showCardNumber ? (
              <Text style={styles.cardNumberStyle}>{cardNumber.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()}</Text>
            ) : (
              <Text style={[styles.cardNumberStyle, { fontSize: 15 }]}>•••• •••• •••• {last4}</Text>
            )}
            <Text style={styles.dateText}>Thru: 12/20
             {'   '}
             {showCardNumber ? (
               <Text style={[styles.dateText]}>CVV: 456 </Text>
             ) : (
              <Text style={[styles.dateText]}>CVV: * * * </Text>
             )}
            </Text>
          </View>
          <View style={styles.logoWrapStyle} >
            <Image resizeMode="contain" source={visa} style={styles.logoStyle('visa')} />
          </View>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={() => { setShowVardNumber(!showCardNumber)}}  style={[commonStyles.row, styles.buttonWrap]}>
        <View>
          <Image resizeMode="contain" source={eyeIcon} style={styles.eyeIcon} />
        </View>
        <Text style={styles.buttonTitle}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}
