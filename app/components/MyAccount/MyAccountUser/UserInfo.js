import React, { useContext, useRef } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { Avatar } from "react-native-elements";
import AuthContext from "../../../context/auth/authContext";
import UpdateUserInfo from "./UpdateUserInfo";
import Toast from "react-native-easy-toast";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const UserInfo = () => {
  const authContext = useContext(AuthContext);
  const { user, updateUser, uploadImage } = authContext;

  const toast = useRef(null);

  const updateName = name => {
    updateUser({ name }, user.id, toast.current, 500);
  };

  const updateEmail = (email, password) => {
    updateUser({ email, password }, user.id, toast.current, 500);
  };

  const updateImage = async () => {
    const resultPermissions = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (resultPermissions.status === "denied") {
      toast.current.show("Es necesario aceptar los permisos de la galería");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowEditing: true,
        aspect: [4, 3]
      });

      if (result.cancelled) {
        toast.current.show("Haz cerrado la galería de imagenes");
      } else {
        uploadImage(result, user.id, toast.current, 500);
      }
    }
  };

  return (
    <View>
      {!user ? (
        <ActivityIndicator />
      ) : (
        <View>
          <View style={styles.viewUserInfo}>
            <Avatar
              rounded
              size="large"
              showEditButton
              onEditPress={updateImage}
              source={{
                uri: user.image
                  ? user.image
                  : "https://api.adorable.io/avatars/285/abott@adorable.pngCopy"
              }}
              containerStyle={styles.userInfoAvatar}
            />
            <Text>
              <Text style={styles.name}>{user.name}</Text>
              {"\n"}
              <Text>{user.email}</Text>
            </Text>
          </View>
          <UpdateUserInfo
            user={user}
            updateName={updateName}
            updateEmail={updateEmail}
          />
        </View>
      )}
      <Toast
        ref={toast}
        position="bottom"
        positionValue={450}
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={{ color: "#fff" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#f2f2f2"
  },
  userInfoAvatar: {
    marginRight: 20
  },
  name: {
    fontWeight: "bold"
  }
});

export default UserInfo;
