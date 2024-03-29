import { useState } from 'react';
import BasketDishItem from '../../components/BasketDishItem';
import { StyleSheet, View, Text, FlatList } from 'react-native';


import restaurants from '../../../assets/data/restaurants.json'

const restaurant = restaurants[0];

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name} </Text>
      <Text style={{fontWeight: "bold", marginTop: 20, fontSize: 19}}>Your Items </Text>
      <FlatList data={restaurant.dishes} renderItem={({item}) => <BasketDishItem basketDish = {item} />} />
      <View style={styles.separator} />

      <View style={styles.button} >
        <Text style={styles.buttonText}>Create Order</Text>

      </View>



    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray"
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10
  },
  row: {
    flexDirection: "row",
    alignContent: "center",
    marginVertical: 15,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center"

  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18



  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    marginRight: 10,
    paddingVertical: 2.,
    borderRadius: 3
  },
});

export default Basket;


