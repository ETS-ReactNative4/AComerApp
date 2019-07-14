import React, { useRef, useState, useContext, useEffect } from "react";
import RestaurantContext from "../../context/restaurant/restaurantContext";
import AuthContext from "../../context/auth/authContext";
import { StyleSheet, View, ActivityIndicator, ScrollView } from "react-native";
import { Icon, Image, Button, Text, Overlay } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Toast from "react-native-easy-toast";
import defaultImage from "../../../assets/img/no-image.png";

import t from "tcomb-form-native";
const Form = t.form.Form;
import {
  AddRestaurantStruct,
  AddRestaurantOptions
} from "../../forms/AddRestaurant";

const AddRestaurant = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  const restaurantContext = useContext(RestaurantContext);
  const {
    restaurantPhoto,
    setRestaurantPhoto,
    loading,
    addRestaurant
  } = restaurantContext;

  const addRestaurantForm = useRef(null);
  const toast = useRef(null);

  const uploadImage = async () => {
    const resultPermissions = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (resultPermissions.status === "denied") {
      toast.current.show("Es necesario aceptar los permisos de la galería");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowEditing: true
      });

      if (result.cancelled) {
        toast.current.show("Haz cerrado la galería de imagenes", 1500);
      } else {
        const file = {
          uri: result.uri,
          name: result.uri.replace(/^.*[\\\/]/, ""),
          type: "image/jpeg"
        };

        await setRestaurantPhoto(file);
      }
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    description: ""
  });
  const { name, address, city, description } = formData;
  const onChange = formData => setFormData(formData);

  const onSubmit = () => {
    if (!name || !address || !city || !description) {
      toast.current.show("Debes completar todos los campos", 1500);
    } else if (!restaurantPhoto) {
      toast.current.show("Debes subir una imagen", 1500);
    } else {
      addRestaurant(
        formData,
        restaurantPhoto,
        user.id,
        toast.current,
        1500,
        navigation
      );
    }
  };

  return (
    <ScrollView style={styles.viewBody}>
      <View style={styles.viewPhoto}>
        <Image
          source={
            !restaurantPhoto ? defaultImage : { uri: restaurantPhoto.uri }
          }
          PlaceholderContent={<ActivityIndicator />}
          style={{ width: 500, height: 200 }}
        />
      </View>
      <View>
        <Form
          ref={addRestaurantForm}
          type={AddRestaurantStruct}
          options={AddRestaurantOptions}
          value={formData}
          onChange={onChange}
        />
      </View>
      <View style={styles.viewIconUploadPhoto}>
        <Icon
          name="camera"
          type="material-community"
          color="#7a7a7a"
          iconStyle={styles.addPhotoIcon}
          onPress={uploadImage}
        />
      </View>
      <View style={styles.viewBtnSubmit}>
        <Button
          title="Crear Restaurant"
          onPress={onSubmit}
          buttonStyle={styles.btnSubmit}
        />
      </View>
      <Overlay
        overlayBackgroundColor="transparent"
        overlayStyle={styles.overlayLoading}
        isVisible={loading}
        width="auto"
        height="auto"
      >
        <View>
          <Text style={styles.overlayText}>Creando restaurant</Text>
          <ActivityIndicator
            size="large"
            color="#ffc107"
            style={styles.activityIndicatorStyle}
          />
        </View>
      </Overlay>
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
  viewPhoto: {
    alignItems: "center",
    height: 200,
    marginBottom: 20
  },
  viewIconUploadPhoto: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 12
  },
  addPhotoIcon: {
    backgroundColor: "#e3e3e3",
    padding: 17,
    paddingBottom: 14,
    margin: 0
  },
  viewBtnSubmit: {
    flex: 1,
    justifyContent: "flex-end"
  },
  btnSubmit: {
    backgroundColor: "#ffc107",
    margin: 20
  },
  overlayStyle: {
    padding: 20
  },
  overlayText: {
    color: "#ffc107",
    marginBottom: 20,
    fontSize: 20
  },
  activityIndicatorStyle: {}
});

export default AddRestaurant;
