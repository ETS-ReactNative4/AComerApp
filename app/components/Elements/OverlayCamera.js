import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { Overlay } from "react-native-elements";
import { Camera } from "expo-camera";

const OverlayCamera = ({}) => {
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
  }
});

export default OverlayCamera;
