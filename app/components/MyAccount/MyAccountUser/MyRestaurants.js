import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import AuthContext from "../../../context/auth/authContext";
import { Image } from "react-native-elements";

const MyRestaurants = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { loadMyRestaurants, myRestaurants } = authContext;
  const user = navigation.state.params;

  useEffect(() => {
    loadMyRestaurants(user);
  }, []);

  const renderRow = restaurant => {
    const { name, city, description, address, image } = restaurant.item;
    return (
      <TouchableOpacity onPress={() => goToRestaurant(restaurant.item)}>
        <View style={styles.viewRestaurant}>
          <View sytle={styles.viewRestaurantImage}>
            <Image
              resizeMode="cover"
              source={{ uri: image }}
              style={styles.imageRestaurant}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={styles.viewRestaurantInfo}>
            <Text style={styles.flatlistRestaurantName}>{name}</Text>
            <Text style={styles.flatlistRestaurantAddress}>
              {address}, {city}
            </Text>
            <Text style={styles.flatlistRestaurantDescription}>
              {description.substr(0, 60)} ...
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.viewBody}>
      <FlatList
        data={myRestaurants}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  },
  viewRestaurant: {
    flexDirection: "row",
    margin: 10
  },
  viewRestaurantImage: {
    marginRight: 15
  },
  imageRestaurant: {
    width: 80,
    height: 80
  },
  viewRestaurantInfo: {
    marginLeft: 15
  },
  flatlistRestaurantName: {
    fontWeight: "bold"
  },
  flatlistRestaurantAddress: {
    paddingTop: 2,
    color: "grey"
  },
  flatlistRestaurantDescription: {
    paddingTop: 2,
    color: "grey",
    width: 300
  }
});

export default MyRestaurants;
