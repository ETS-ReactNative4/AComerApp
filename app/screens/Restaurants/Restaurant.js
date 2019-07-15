import React, { useContext, useEffect, useRef } from "react";
import AuthContext from "../../context/auth/authContext";
import RestaurantContext from "../../context/restaurant/restaurantContext";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  ScrollView
} from "react-native";
import {
  Image,
  Icon,
  ListItem,
  Button,
  Text,
  Rating,
  Avatar
} from "react-native-elements";
import Toast from "react-native-easy-toast";

const Restaurant = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated, user } = authContext;

  const restaurantContext = useContext(RestaurantContext);
  const {
    checkAddReviewUser,
    userHasReview,
    getReviews,
    reviews,
    averageRestaurantReviews
  } = restaurantContext;

  const toast = useRef(null);

  const {
    id,
    name,
    description,
    address,
    city,
    image
  } = navigation.state.params;

  useEffect(() => {
    loadUser();
    checkAddReviewUser(
      { restaurant_id: id, user_id: user ? user.id : null },
      toast.current
    );
    getReviews(id);
  }, []);

  const listExtraInfo = [
    {
      text: `${address}, ${city}`,
      iconName: "map-marker",
      iconType: "material-community",
      action: null
    }
  ];

  const goToScreenAddReviewRestaurant = () => {
    if (userHasReview) {
      toast.current.show("¡Ya enviaste tu opinión!");
    } else {
      navigation.navigate("AddReviewRestaurant", {
        id,
        name,
        user
      });
    }
  };

  const renderRow = reviewItem => {
    const { title, review, stars, created_at, user } = reviewItem.item;
    const { name, image } = user;
    const createReview = created_at
      .replace("T", " ")
      .replace("Z", " ")
      .substring(0, created_at.length - 5);

    return (
      <View style={styles.viewReview}>
        <View style={styles.viewImage}>
          <Avatar
            source={{
              uri: image
                ? image
                : "https://api.adorable.io/avatars/285/abott@adorable.png"
            }}
            size="large"
            rounded
            containerStyle={styles.imageAvatarUser}
          />
        </View>
        <View style={styles.viewInfo}>
          <Text style={styles.reviewTitle}>{title}</Text>
          <Text style={styles.reviewText}>{review}</Text>
          <Rating imageSize={15} startingValue={stars} />
          <Text style={styles.reviewDate}>
            {createReview} - {name}
          </Text>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.noFoundReviews}>
        {reviews.length === 0 ? (
          <Text>¡Se el primer en dejar tu comentario!</Text>
        ) : (
          <Text>Pronto se añadiran más opiniones</Text>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.viewBody}>
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
            onPress={goToScreenAddReviewRestaurant}
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
      <Text style={styles.commentTitle}>
        Comentarios ({reviews && reviews.length})
      </Text>
      {reviews ? (
        <FlatList
          data={reviews}
          renderItem={renderRow}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0}
          ListFooterComponent={renderFooter}
        />
      ) : (
        <View style={styles.startLoadReviews}>
          <ActivityIndicator size="large" />
          <Text>Cargando opiniones</Text>
        </View>
      )}
      <Toast
        ref={toast}
        position="bottom"
        positionValue={320}
        fadeInDuration={1000}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={{ color: "#fff" }}
      />
    </ScrollView>
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
  },
  startLoadReviews: {
    marginTop: 20,
    alignItems: "center"
  },
  viewReview: {
    flexDirection: "row",
    margin: 10,
    paddingBottom: 20,
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: 1
  },
  viewImage: {
    marginRight: 15
  },
  imageAvatarUser: {
    width: 50,
    height: 50
  },
  viewInfo: {
    flex: 1,
    alignItems: "flex-start"
  },
  reviewTitle: {
    fontWeight: "bold"
  },
  reviewText: {
    paddingTop: 2,
    color: "grey",
    marginBottom: 5
  },
  reviewDate: {
    marginTop: 5,
    color: "grey",
    fontSize: 12
  },
  commentTitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold"
  },
  noFoundReviews: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center"
  }
});

export default Restaurant;
