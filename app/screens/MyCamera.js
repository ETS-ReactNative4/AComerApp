import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { Camera } from "expo-camera";

const MyCamera = () => {
  const camera = useRef(null);

  return (
    <View style={styles.viewCamera}>
      <Camera
        style={styles.camera}
        ref={camera}
        type={Camera.Constants.Type.back}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewCamera: {
    flex: 1
  },
  camera: {
    flex: 1
  }
});

export default MyCamera;
