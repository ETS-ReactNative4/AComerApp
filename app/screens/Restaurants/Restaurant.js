import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Image, Icon, ListItem, Button, Text } from "react-native-elements";

const Restaurant = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated, user } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  const {
    id,
    name,
    description,
    address,
    city,
    image
  } = navigation.state.params;

  const listExtraInfo = [
    {
      text: `${address}, ${city}`,
      iconName: "map-marker",
      iconType: "material-community",
      action: null
    }
  ];

  return (
    <View style={styles.viewBody}>
      <View style={styles.viewImage}>
        <Image
          source={{ uri: image }}
          PlaceholderContent={<ActivityIndicator />}
          style={styles.imageRestaurant}
        />
      </View>
      <View style={styles.viewRestaurantBasicInfo}>
        <Text style={styles.nameRestaurant}>{name}</Text>
        <Text style={styles.descriptionRestaurant}>{description}</Text>
      </View>
      <View style={styles.viewRestaurantExtraInfo}>
        <Text style={styles.restaurantExtraInfoTitle}>
          Información sobre el Restaurant
        </Text>
        {listExtraInfo.map((item, index) => (
          <ListItem
            key={index}
            title={item.text}
            leftIcon={<Icon name={item.iconName} type={item.iconType} />}
          />
        ))}
      </View>
      {isAuthenticated ? (
        <View style={styles.viewBtnAddReview}>
          <Button
            title="Añadir Comentario"
            onPress={() =>
              navigation.navigate("AddReviewRestaurant", {
                id,
                name,
                user
              })
            }
            buttonStyle={styles.btnAddReview}
          />
        </View>
      ) : (
        <Text style={styles.textNoAuth}>
          Para escribir una opinión tienes que iniciar sesión, puedes hacer
          click{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.textLinkLogin}
          >
            AQUI
          </Text>
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  },
  viewImage: {
    width: "100%"
  },
  imageRestaurant: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  viewRestaurantBasicInfo: {
    margin: 15
  },
  nameRestaurant: {
    fontSize: 20,
    fontWeight: "bold"
  },
  descriptionRestaurant: {
    marginTop: 5,
    color: "grey"
  },
  viewRestaurantExtraInfo: {
    margin: 15,
    marginTop: 25
  },
  restaurantExtraInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  viewBtnAddReview: {
    margin: 20
  },
  btnAddReview: {
    backgroundColor: "#ffc107"
  },
  textNoAuth: {
    margin: 20
  },
  textLinkLogin: {
    color: "#ffc107",
    fontWeight: "bold"
  }
});

export default Restaurant;
