import React, { useState, useContext } from "react";
import RestaurantContext from "../context/restaurant/restaurantContext";
import { StyleSheet, View, Text } from "react-native";
import { SearchBar } from "react-native-elements";

const Search = () => {
  const [search, setSearch] = useState("");
  const restaurantContext = useContext(RestaurantContext);
  const { foundRestaurants, filterRestaurants } = restaurantContext;

  const searchRestaurants = value => {
    setSearch(value);
    filterRestaurants(value);
  };

  return (
    <View style={styles.viewBody}>
      <SearchBar
        placeholder="Buscar restaurantes..."
        onChangeText={searchRestaurants}
        value={search}
        containerStyle={styles.SearchBar}
        lightTheme={true}
      />
      <Text>{search}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  },
  SearchBar: {
    marginBottom: 20
  }
});

export default Search;
