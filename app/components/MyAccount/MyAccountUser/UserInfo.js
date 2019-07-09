import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";

import * as firebase from "firebase";

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo();
  }, {});

  const getUserInfo = () => {
    const user = firebase.auth().currentUser;
    user.providerData.forEach(userInfo => {
      setUser(userInfo);
    });
  };

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        source={{
          uri: "https://api.adorable.io/avatars/285/abott@adorable.pngCopy"
        }}
        containerStyle={styles.userInfoAvatar}
      />
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
