import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import logo from '../../assets/images/logo.png';
import speedImg from '../../assets/images/speedImg.png';
import { commonStyles } from '../../config/commonStyles';
import { useDispatch } from 'react-redux';
import { setCardLimit } from '../../redux/actions/cardActions';

export default function CardLimit({ navigation }) {
  const dispatch = useDispatch();
  const priceSuggestions = [
    { id: 1, price: '5,000', priceWithCurrency: 'S$ 5,000' },
    { id: 2, price: '10,000', priceWithCurrency: 'S$ 10,000' },
    { id: 3, price: '20,000', priceWithCurrency: 'S$ 20,000' },
  ];
  const [state, setState] = useState({
    priceLimit: ''
  });
  const { priceLimit } = state;

  const onInputChange = (val) => {
    setState((p) => ({ ...p, priceLimit: val }));
  };

  const onSuggestionClick = (item) => {
    setState((p) => ({ ...p, priceLimit: item.price }));
  };

  const saveSpendLimit = () => {
    if (parseFloat(priceLimit.replace(/,/g, '')) > 0) {
      dispatch(setCardLimit(priceLimit));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.mainWrap}>
      <View style={styles.headerWrap}>
        <View style={[commonStyles.row, styles.logoWrap]}>
          <Text onPress={() => navigation.goBack()} style={styles.backIcon}>Back </Text>
          <Image source={logo} style={styles.logoStyle('logo')} />
        </View>
        <Text style={styles.titleText}>Spending limit</Text>
      </View>
      <View style={styles.scrollWrap}>
        <View style={[commonStyles.row, styles.titleWrap]}>
          <Image resizeMode="contain" source={speedImg} style={styles.logoStyle('')} />
          <Text style={[styles.subTitle, { color: '#222', paddingLeft: 10 }]}>Set a weekly debit card spending limit</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.inputWrap}>
            <View style={styles.currencyWrap}>
              <Text style={styles.currency}>
                S$
            </Text>
            </View>
            <TextInput
              placeholder=""
              style={styles.textInputStyle}
              onChangeText={(val) => onInputChange(val)}
              value={priceLimit}
              keyboardType="number-pad"
              returnKeyType="done"
              onSubmitEditing={() => saveSpendLimit()}
            />
          </View>
          <Text style={styles.helpingText}>Here weekly means the last 7 days - not the calendar week</Text>
          <View style={styles.suggestionsWrap}>
            {priceSuggestions.map((data) => {
              return (
                <TouchableOpacity activeOpacity={0.8} onPress={() => onSuggestionClick(data)} key={data.id} style={styles.singleSuggestion}>
                  <Text style={styles.amountStyle}>{data.priceWithCurrency}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={saveSpendLimit} disabled={priceLimit.length <= 0} style={styles.buttonStyle(priceLimit.length <= 0)}>
          <Text style={styles.buttonTitle}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
