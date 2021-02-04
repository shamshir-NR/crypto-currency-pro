import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Header} from 'react-native-elements';
import Colors from '../../Theme/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const AppHeader = ({title, type = 1}) => {
  const navigation = useNavigation();
  return (
    <Header
      barStyle="light-content"
      centerComponent={{
        text: title,
        style: {color: '#fff', fontWeight: '600'},
      }}
      containerStyle={{backgroundColor: Colors.header}}
      placement={type === 1 ? 'left' : 'center'}
      leftComponent={
        type === 2 ? (
          <Icon
            color="white"
            size={20}
            name="chevron-left"
            onPress={() => navigation.goBack()}
          />
        ) : (
          <></>
        )
      }
      rightComponent={
        <Avatar
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/med/men/44.jpg',
          }}
        />
      }
    />
  );
};

export default AppHeader;
