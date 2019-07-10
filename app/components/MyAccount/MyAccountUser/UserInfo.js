import React, { useContext } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { Avatar } from "react-native-elements";
import AuthContext from "../../../context/auth/authContext";
import UpdateUserInfo from "./UpdateUserInfo";

const UserInfo = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const updateName = name => {
    console.log(name);
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
          <UpdateUserInfo user={user} updateName={updateName} />
        </View>
      )}
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
