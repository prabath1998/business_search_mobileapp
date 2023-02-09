import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function RestaurantItem({ restaurant }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.header}>{restaurant.name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>{restaurant.rating} stars</Text>
          <Text style={styles.money}>{restaurant.price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 120,
    borderRadius: 10,
    shadowOffset: { width: 1, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 9,
    backgroundColor: "gold",
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 400,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    fontWeight: "bold",
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "red",
  },
});