import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import { commonStyles } from '../../config/commonStyles';
import CardComp from '../../components/CardComp';
import ListComp from '../../components/ListComp';
import listArray from './config';
import { useSelector } from 'react-redux';

/**
 * 
 * @returns - Returns Debitcart screen 
 */
export default function DebitCard({ navigation }) {
  const cardLimit = useSelector((state) => state.cardReducer.cardLimit);
  const [state, setState] = useState({
    switchVal: false
  });
  const { switchVal } = state;

  /**
   * 
   * @param {Int} id - Id of selected switch
   * @function - Function to toggle switch 
   */
  const onSwitchValueChange = (id) => {
    if (id === 2) {
      if (cardLimit !== null ) {
        setState((p) => ({ ...p, switchVal: switchVal === id ? false : id }));
      } else {
        navigation.navigate('CardLimit')
      }
    } else if (id === 3) {
      setState((p) => ({ ...p, switchVal: switchVal === id ? false : id }));
    }
  }

  return (
    <View style={styles.mainWrap}>
      <View style={styles.cardDetails}>
        <View style={styles.logoWrap}>
          <Image source={logo} style={styles.logoStyle} />
        </View>
        <Text style={styles.titleText}>Debit card</Text>
        <View style={styles.cardBalanceDetails}>
          <Text style={styles.subTitle}>Available balance</Text>
          <View style={[commonStyles.row, styles.balanceWrap]}>
            <View style={styles.currencyWrap}>
              <Text style={styles.currency}>
                S$
              </Text>
            </View>
            <Text style={styles.titleText}>3,000</Text>
          </View>
        </View>
      </View>
      <ScrollView style={[styles.scrollWrap]} bounces={false} >
        <View style={[styles.contentWrap]}>
          <CardComp />
          <View style={{ paddingTop: 20 }}>
            {listArray.map((item) => {
              return (
                <ListComp
                  key={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
                  isSwitchVisible={item.showSwitch}
                  listIcon={item.image}
                  onSwitchValueChange={() => { onSwitchValueChange(item.id) }}
                  isSwitchOn={switchVal === item.id}
                />
              )
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
