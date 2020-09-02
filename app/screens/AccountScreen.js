import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import routes from '../navigation/routes';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import useAuth from '../auth/useAuth';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        onPress={() => logout()}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    height: '100%',
  },
  container: {
    marginVertical: 20,
  },
});
