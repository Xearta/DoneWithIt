import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
