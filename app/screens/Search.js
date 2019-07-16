import React, { useState, useContext } from "react";
import RestaurantContext from "../context/restaurant/restaurantContext";
import { StyleSheet, View, Text } from "react-native";
import { SearchBar } from "react-native-elements";

const Search = () => {
  const [search, setSearch] = useState(null);
  const restaurantContext = useContext(RestaurantContext);
  const {
    foundRestaurants,
    filterRestaurants,
    clearFilter
  } = restaurantContext;

  const searchRestaurants = value => {
    if (!value) {
      clearFilter();
      setSearch(null);
    } else {
      setSearch(value);
      filterRestaurants(value);
    }
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
      {foundRestaurants && <Text>{foundRestaurants.length}</Text>}
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
