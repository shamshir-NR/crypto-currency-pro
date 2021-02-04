import React, {useEffect} from 'react';
import Navigator from './Navigator/Navigator';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCurrencyData} from './Redux/Actions/home';
import Toast from 'react-native-simple-toast';
const App = () => {
  const apiError = useSelector(({apiReducer}) => apiReducer.apiError);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(fetchCurrencyData());
    }, 3000);
  }, []);
  useEffect(() => {
    if (apiError) {
      Toast.show('Network Error', 3);
    }
  }, [apiError]);
  return (
    <>
      <Navigator />
    </>
  );
};

export default App;
