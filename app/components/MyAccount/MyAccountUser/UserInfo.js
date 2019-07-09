import React, { Fragment, useContext } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { Avatar } from "react-native-elements";
import AuthContext from "../../../context/auth/authContext";

const UserInfo = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

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
              uri: "https://api.adorable.io/avatars/285/abott@adorable.pngCopy"
            }}
            containerStyle={styles.userInfoAvatar}
          />
          <Text>{user.name}</Text>
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
  }
});

export default UserInfo;
