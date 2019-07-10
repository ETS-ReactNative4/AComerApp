import React, { Fragment, useContext } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { Avatar } from "react-native-elements";
import AuthContext from "../../../context/auth/authContext";

const UserInfo = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const { name, image, email } = user;

  return (
    <View style={styles.viewUserInfo}>
      {!user ? (
        <ActivityIndicator />
      ) : (
        <Fragment>
          <Avatar
            rounded
            size="large"
            source={{
              uri: image
                ? image
                : "https://api.adorable.io/avatars/285/abott@adorable.pngCopy"
            }}
            containerStyle={styles.userInfoAvatar}
          />
          <Text style={styles.name}>{name}</Text>
          <Text>{email}</Text>
        </Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30
  },
  userInfoAvatar: {
    marginRight: 20
  },
  name: {
    fontWeight: "bold"
  }
});

export default UserInfo;
