import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const SingleMealScreen = props => {
  console.log(props.route);
  // Grab the mealId and find that meal based on it's id in our data array
const meal = props.route.params;
  return (
    
    <View style={styles.container}>
      <Text>{meal.title}</Text>
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

export default SingleMealScreen;
