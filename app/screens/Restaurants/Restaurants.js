import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import RestaurantContext from "../../context/restaurant/restaurantContext";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { Image } from "react-native-elements";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

const Restaurants = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated } = authContext;

  const restaurantContext = useContext(RestaurantContext);
  const {
    getRestaurants,
    restaurants,
    setStartRestaurants,
    loadingRestaurants
  } = restaurantContext;

  useEffect(() => {
    loadUser();
    getRestaurants();
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

  const goToRestaurant = restaurant => {
    navigation.navigate("Restaurant", restaurant);
  };

  const handleLoadMore = async () => {
    let resultRestaurants = restaurants;
    await setStartRestaurants(resultRestaurants.length);
    await getRestaurants();
  };

  const renderFooter = () => {
    if (restaurants.length >= 8) {
      if (loadingRestaurants) {
        return (
          <View style={styles.loaderRestaurants}>
            <ActivityIndicator size="large" />
          </View>
        );
      } else {
        return (
          <View style={styles.noFoundRestaurants}>
            <Text>Pronto se añadiran más restaurantes</Text>
          </View>
        );
      }
    } else {
      return (
        <View style={styles.noFoundRestaurants}>
          <Text>Pronto se añadiran más restaurantes</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.viewBody}>
      {restaurants ? (
        <View>
          <FlatList
            data={restaurants}
            renderItem={renderRow}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={renderFooter}
          />
        </View>
      ) : (
        <View style={styles.startLoadRestaurants}>
          <ActivityIndicator size="large" />
          <Text>Cargando restaurants</Text>
        </View>
      )}
      {isAuthenticated && (
        <ActionButton buttonColor="#ffc107">
          <ActionButton.Item
            buttonColor="#ffc107"
            title="Nuevo Restaurant"
            onPress={() => navigation.navigate("AddRestaurant")}
          >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="black"
            title="Actualizar"
            onPress={() => getRestaurants()}
          >
            <Icon name="md-refresh-circle" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  },
  startLoadRestaurants: {
    marginTop: 20,
    alignItems: "center"
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
  loaderRestaurants: {
    marginTop: 20,
    marginBottom: 20
  },
  noFoundRestaurants: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center"
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});

export default Restaurants;
