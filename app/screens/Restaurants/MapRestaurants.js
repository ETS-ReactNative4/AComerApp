import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";

const MapRestaurants = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    setLocation(navigation.state.params);
  }, []);

  return (
    <View style={styles.viewBody}>
      {location && (
        <View>
          <Text>
            {location.latitude}
            {location.longitude}
          </Text>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  }
});
export default MapRestaurants;
