import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { Overlay, Icon } from "react-native-elements";
import { Camera } from "expo-camera";

const OverlayCamera = ({ closeFunction }) => {
  const camera = useRef(null);

  return (
    <Overlay
      width="100%"
      height="100%"
      overlayBackgroundColor="transparent"
      isVisible={true}
      overlayStyle={styles.overlayStyle}
    >
      <View style={styles.viewCamera}>
        <Camera
          style={styles.camera}
          ref={camera}
          type={Camera.Constants.Type.back}
        />
        <Icon
          containerStyle={styles.containerIconClose}
          type="material-community"
          name="close-circle-outline"
          size={30}
          color="#ffc107"
          onPress={closeFunction}
        />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlayStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  viewCamera: {
    width: "100%",
    height: "50%",
    borderColor: "#ffc107",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  camera: {
    flex: 1,
    width: "auto",
    height: "auto"
  },
  containerIconClose: {
    position: "absolute",
    right: -15,
    top: -16
  }
});

export default OverlayCamera;
