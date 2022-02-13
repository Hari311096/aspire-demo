import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import { commonStyles } from '../../config/commonStyles';
import CardComp from '../../components/CardComp';
import ListComp from '../../components/ListComp';
import listArray from './config';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from 'react-native-progress/Bar'
import colors from '../../config/colors';
import { setCardLimit } from '../../redux/actions/cardActions';

/**
 * 
 * @returns - Returns Debitcart screen 
 */
export default function DebitCard({ navigation }) {
  const cardLimit = useSelector((state) => state.cardReducer.cardLimit);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    switchVal: false,
    progress: 0
  });
  const { switchVal, progress } = state;

  /**
   * 
   * @param {Int} id - Id of selected switch
   * @function - Function to toggle switch 
   */
  const onSwitchValueChange = (id) => {
    if (id === 2) {
      if (cardLimit !== null) {
        if (switchVal === id) {
          setState((p) => ({ ...p, switchVal: false }));
          dispatch(setCardLimit(null))
        } else {
          setState((p) => ({ ...p, switchVal: id }));
        }
      } else {
        navigation.navigate('CardLimit')
      }
    } else if (id === 3) {
      setState((p) => ({ ...p, switchVal: switchVal === id ? false : id }));
    }
  }

  useEffect(() => {
    if (cardLimit !== null && parseFloat(cardLimit.replace(/,/g, '')) > 0) {
      const updatedProgress = 345 / parseFloat(cardLimit.replace(/,/g, ''));
      setState((p) => ({ ...p, switchVal: 2, progress: updatedProgress  }));
    }
  }, [cardLimit])

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
          {cardLimit !== null && parseFloat(cardLimit.replace(/,/g, '')) > 0 && (
            <View style={{ paddingTop: 20 }}>
              <View style={styles.priceLimitHeaderWrap}>
                <Text style={styles.priceLimitHeader}>Debit card spending limit</Text>
                <Text style={[styles.priceLimitHeader, styles.priceLimit]}>$345
                <Text style={[styles.priceLimitHeader, { color: '#22222233' }]}> | ${cardLimit}</Text>
                </Text>
              </View>
              <ProgressBar
                unfilledColor={'rgba(32, 209, 113, 0.1)'}
                color={colors.secondary}
                progress={progress}
                width={Dimensions.get('window').width * 0.9}
                height={15}
                borderRadius={30}
                borderWidth={0}
              />
            </View>
          )}
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
