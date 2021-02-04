import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import Colors from '../../Theme/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swipeout from 'react-native-swipeout';
import {useDispatch} from 'react-redux';
import {removeCurrency} from '../../Redux/Actions/home';
const CurrencyCard = ({item, type = 1}) => {
  const dispatch = useDispatch();
  const swipeoutBtns = [
    {
      text: 'Delete',
      autoClose: true,
      backgroundColor: Colors.red,
      onPress: () => dispatch(removeCurrency(item.symbol)),
    },
  ];
  return (
    <Swipeout right={swipeoutBtns}>
      <View>
        <ListItem bottomDivider>
          {type === 1 && (
            <Avatar
              source={{
                uri: `https://messari.io/asset-images/${item.id}/64.png`,
              }}
            />
          )}
          <ListItem.Content>
            <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              {item.symbol}
            </ListItem.Subtitle>
          </ListItem.Content>
          {type === 1 && (
            <View style={styles.flexEnd}>
              <View>
                <Text style={styles.price}>
                  ${item.metrics.market_data.price_usd.toFixed(5)}
                </Text>
                <View style={styles.flexEnd}>
                  {item.metrics.market_data.percent_change_usd_last_24_hours <
                  0 ? (
                    <Icon
                      style={{marginTop: 3, marginRight: 1}}
                      name={'level-down-alt'}
                      color={Colors.red}
                      size={8}
                    />
                  ) : (
                    <Icon
                      style={{marginTop: 3, marginRight: 1}}
                      name={'level-up-alt'}
                      color={Colors.green}
                      size={8}
                    />
                  )}

                  <Text
                    style={[
                      styles.priceChange,
                      {
                        color:
                          item.metrics.market_data
                            .percent_change_usd_last_24_hours < 0
                            ? Colors.red
                            : Colors.green,
                      },
                    ]}>
                    {item.metrics.market_data.percent_change_usd_last_24_hours.toFixed(
                      2,
                    )}
                    %
                  </Text>
                </View>
              </View>
            </View>
          )}
          {type === 2 && (
            <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
              <Icon name="plus" color={'grey'} size={18} />
            </View>
          )}
        </ListItem>
      </View>
    </Swipeout>
  );
};

export default CurrencyCard;
const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.black,
  },
  subtitle: {
    fontSize: 10,
    color: Colors.header,
    marginTop: 2,
  },
  price: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.black,
  },
  priceChange: {
    fontSize: 9,
    textAlign: 'right',
    marginTop: 2,
  },
  flexEnd: {justifyContent: 'flex-end', flexDirection: 'row'},
});
