import React from "react";
import { StyleSheet, View } from "react-native";
import { Overlay } from "react-native-elements";
import { Camera } from "expo-camera";

const OverlayCamera = ({}) => {
  return (
    <Overlay
      isVisible={true}
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlayStyle}
    >
      <View style={styles.viewCamera}>
        <Camera
          style={styles.camera}
          ref={camera}
          type={Camera.Constants.Type.back}
        />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlayStyle: {
    flex: 1
  },
  viewCamera: {
    flex: 1
  },
  camera: {
    flex: 1
  }
});

export default OverlayCamera;
