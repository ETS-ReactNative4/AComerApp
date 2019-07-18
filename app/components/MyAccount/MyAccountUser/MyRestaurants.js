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
    const {
      name,
      city,
      description,
      address,
      image,
      created_at,
      status
    } = restaurant.item;

    const createRestaurant = created_at
      .replace("T", " ")
      .replace("Z", " ")
      .substring(0, created_at.length - 5);

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
            {status === "approved" && (
              <Text style={styles.approvedRestaurantState}>Aprobado</Text>
            )}
            {status === "pending" && (
              <Text style={styles.pendingRestaurantState}>Pendiente</Text>
            )}
            {status === "rejected" && (
              <Text style={styles.rejectedRestaurantState}>Rechazado</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const goToRestaurant = restaurant => {
    navigation.navigate("Restaurant", restaurant);
  };

  return (
    <View style={styles.viewBody}>
      {myRestaurants && myRestaurants.length < 1 && (
        <View style={styles.noFoundRestaurants}>
          <Text>No has agregado restaurantes</Text>
        </View>
      )}
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
  },
  approvedRestaurantState: {
    color: "green"
  },
  pendingRestaurantState: {
    color: "#ffc107"
  },
  rejectedRestaurantState: {
    color: "red"
  },
  noFoundRestaurants: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center"
  }
});

export default MyRestaurants;
