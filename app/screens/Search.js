import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SearchBar } from "react-native-elements";

const Search = () => {
  const [search, setSearch] = useState("");

  const searchRestaurants = value => {
    setSearch(value);
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
