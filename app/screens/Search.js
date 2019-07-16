import React, { useState, useContext } from "react";
import RestaurantContext from "../context/restaurant/restaurantContext";
import { StyleSheet, View, Text } from "react-native";
import { SearchBar, ListItem, Icon } from "react-native-elements";

const Search = ({ navigation }) => {
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

  const touchRestaurant = async restaurant => {
    await clearFilter();
    await setSearch(null);
    const { id, name, description, address, city, image } = restaurant;
    navigation.navigate("Restaurant", {
      id,
      name,
      description,
      address,
      city,
      image
    });
  };

  return (
    <View style={styles.viewBody}>
      <SearchBar
        placeholder="Nombre, Ciudad o Dirección"
        onChangeText={searchRestaurants}
        value={search}
        containerStyle={styles.SearchBar}
        lightTheme={true}
      />
      {foundRestaurants ? (
        foundRestaurants.length > 0 ? (
          <View>
            {foundRestaurants.map((restaurant, index) => {
              return (
                <ListItem
                  key={index}
                  title={restaurant.name}
                  leftAvatar={{ source: { uri: restaurant.image } }}
                  rightIcon={
                    <Icon type="material-community" name="chevron-right" />
                  }
                  onPress={() => touchRestaurant(restaurant)}
                />
              );
            })}
          </View>
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
