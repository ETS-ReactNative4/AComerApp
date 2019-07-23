import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";

const MapRestaurants = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    setLocation(navigation.state.params);
  }, []);

  return (
    <MapView
      style={StyleSheet.absoluteFillObject}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default MapRestaurants;
