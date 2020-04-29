import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const OrderScreen = props => {
  const Meal = [
    { id: 1, title: 'Pancakes and Eggs' },
    { id: 2, title: 'Biscuits and Gravy' },
    { id: 3, title: 'Salad with Asparagus' },
    { id: 4, title: 'Burger and Fries' },
    { id: 5, title: 'Chicken and Waffles' },
    { id: 6, title: 'Avocado Toast and Apples' },
    { id: 7, title: 'Mac and Cheese with Fries' },
    { id: 8, title: 'Hashbrowns and OJ' },
    { id: 9, title: 'Full English Breakfast' },
    { id: 10, title: 'Birria Tacos' },
  ];

  return (
    <FlatList
      data={Meal}
      renderItem={itemData => {
        return (
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                props.navigation.navigate('Single Meal', {
                  mealId: itemData.item.id,
                  title: itemData.item.title,
                });
              }}>
              <Text style={styles.title}>{itemData.item.title}</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    margin: 10,
    padding: 20,
  },
  title: {
    color: '#333',
  },
});

export default OrderScreen;
