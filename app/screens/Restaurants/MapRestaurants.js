import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapRestaurants = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    setLocation(navigation.state.params);
  }, []);

  return (
    <MapView style={StyleSheet.absoluteFillObject} region={location}>
      <Marker coordinate={location} />
    </MapView>
  );
};

const styles = StyleSheet.create({});
export default MapRestaurants;
