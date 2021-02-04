import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Colors from '../../Theme/Colors';
import {Header, Button, Avatar} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import CurrencyCard from '../../Components/CurrencyCard/CurrencyCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCurrencyData} from '../../Redux/Actions/home';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppHeader from '../../Components/Header/AppHeader';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const currencyValues = useSelector(({home}) => home.data);
  const myCurrency = useSelector(({home}) => home.myCurrencies);

  return (
    <SafeAreaView style={{backgroundColor: Colors.header}}>
      <AppHeader title={'CrytoTracker Pro'}/>
      <View style={{backgroundColor: 'white'}}>
        <FlatList
          data={sortList(currencyValues, myCurrency)}
          renderItem={({item}) => <CurrencyCard item={item} />}
          keyExtractor={(item) => item.id + 'bets'}
          showsVerticalScrollIndicator={false}
        />
        <Button
          type={'clear'}
          title="Add a Cryptocurrency"
          titleStyle={{fontSize: 10, color: Colors.header, marginLeft: 3}}
          onPress={() => navigation.navigate('addCurrency')}
          icon={<Icon name="plus" color={Colors.header} size={10} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
function sortList(data, myList) {
  var newSortedArray = [];
  data.forEach((element) => {
    if (myList.includes(element.symbol)) {
      newSortedArray.push(element);
    }
  });

  return newSortedArray;
}
