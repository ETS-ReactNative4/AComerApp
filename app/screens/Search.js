import React, { useState, useContext } from "react";
import RestaurantContext from "../context/restaurant/restaurantContext";
import { StyleSheet, View, Text } from "react-native";
import { SearchBar, ListItem, Icon } from "react-native-elements";

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
        placeholder="Ingresa nombre o ciudad"
        onChangeText={searchRestaurants}
        value={search}
        containerStyle={styles.SearchBar}
        lightTheme={true}
      />
      <Text>{search}</Text>
      {foundRestaurants && <Text>{foundRestaurants.length}</Text>}
      {foundRestaurants ? (
        foundRestaurants.length > 0 ? (
          <Text>Hay restaurantes</Text>
        ) : (
          <Text style={styles.notFoundRestaurantsText}>
            No se han encontrado restaurantes
          </Text>
        )
      ) : (
        <View>
          <Text style={styles.notFoundRestaurantsText}>
            ¡Busca tus restaurantes!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  },
  SearchBar: {
    marginBottom: 20
  },
  notFoundRestaurantsText: {
    textAlign: "center"
  }
});

export default Search;
