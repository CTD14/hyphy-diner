import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Hyphy's Diner!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;
