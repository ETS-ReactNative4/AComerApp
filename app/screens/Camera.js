import React, { useRef } from "react";
import { StyleeSheet, View } from "react-native";
import { Camera } from "expo-camera";

const Camera = () => {
  const camera = useRef(null);

  return (
    <View style={styles.viewCamera}>
      <Camera ref={camera} type={Camera.Constants.Type.back} />
    </View>
  );
};

const styles = StyleeSheet.create({
  viewCamera: {
    flex: 1
  }
});

export default Camera;
