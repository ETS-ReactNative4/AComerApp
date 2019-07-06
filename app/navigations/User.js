import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../screens/Home";
import MyAccountScreen from "../screens/MyAccount";
import SearchScreen from "../screens/Search";
import TopFive from "../screens/TopFive";

const HomeScreenStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Home"
    })
  }
});

const TopFiveScreenStack = createStackNavigator({
  TopFive: {
    screen: TopFive,
    navigationOptions: ({ navigation }) => ({
      title: "Top 5 Restaurants"
    })
  }
});

const SearchScreenStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Buscar"
    })
  }
});
const MyAccountScreenStack = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Mi Cuenta"
    })
  }
});

const RootStack = createBottomTabNavigator({
  Home: {
    screen: HomeScreenStack
  }
});

export default createAppContainer(RootStack);
