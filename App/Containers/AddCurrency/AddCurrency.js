import React, {useState} from 'react';
import {View} from 'react-native';
import Colors from '../../Theme/Colors';
import {SafeAreaView} from 'react-navigation';
import {Header} from 'react-native-elements';
import Autocomplete from 'react-native-autocomplete-input';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import CurrencyCard from '../../Components/CurrencyCard/CurrencyCard';
import {addNewCurrency} from '../../Redux/Actions/home';
import AppHeader from '../../Components/Header/AppHeader';

const AddCurrency = ({navigation}) => {
  const dispatch = useDispatch();
  const [searchText, setsearchText] = useState('');
  const currencyValues = useSelector(({home}) => home.data);
  const addNewValue = (data) => {
    dispatch(addNewCurrency(data.symbol));
    navigation.goBack();
  };
  return (
    <View>
     <AppHeader title={"Add Crypto"} type={2}/>
      <View>
        <Autocomplete
          placeholder="Enter a curreny name"
          data={filterData(searchText, currencyValues)}
          defaultValue={searchText}
          onChangeText={(text) => setsearchText(text)}
          renderItem={({item, i}) => (
            <TouchableOpacity onPress={() => addNewValue(item)}>
              <View>
                <CurrencyCard item={item} type={2} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default AddCurrency;

function filterData(searchText, list) {
  if (searchText === '') {
    return [];
  }
  return list.filter((item) => item.slug.includes(searchText.toLowerCase()));
}
