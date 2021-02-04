import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Containers/Home/Home';
import AddCurrency from '../Containers/AddCurrency/AddCurrency';
const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Navigator;
function RootStackScreen() {
  return (
    <Stack.Navigator initialRouteName="home" headerMode="none" >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="addCurrency" component={AddCurrency}  />
    </Stack.Navigator>
  );
}
