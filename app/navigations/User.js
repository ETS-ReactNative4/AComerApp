import React from "react";
import { Icon } from "react-native-elements";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import RestaurantsScreen from "../screens/Restaurants/Restaurants";
import AddRestaurantScreen from "../screens/Restaurants/AddRestaurant";
import RestaurantScreen from "../screens/Restaurants/Restaurant";
import AddReviewRestaurantScreen from "../screens/Restaurants/AddReviewRestaurant";

import TopFiveScreen from "../screens/TopFive";
import SearchScreen from "../screens/Search";
import MyCameraScreen from "../screens/MyCamera";

import MyAccountScreen from "../screens/MyAccount/MyAccount";
import RegisterScreen from "../screens/MyAccount/Register";
import LoginScreen from "../screens/MyAccount/Login";
import MyRestaurantsScreen from "../components/MyAccount/MyAccountUser/MyRestaurants";

const RestaurantsScreenStack = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Restaurants"
    })
  },
  AddRestaurant: {
    screen: AddRestaurantScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Nuevo Restaurant"
    })
  },
  Restaurant: {
    screen: RestaurantScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name
    })
  },
  AddReviewRestaurant: {
    screen: AddReviewRestaurantScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name
    })
  }
});

const TopFiveScreenStack = createStackNavigator({
  TopFive: {
    screen: TopFiveScreen,
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
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Registrar"
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Ingresar"
    })
  },
  MyRestaurants: {
    screen: MyRestaurantsScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Mis Restaurantes"
    })
  },
  MyCamera: {
    screen: MyCameraScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Mi Cámara"
    })
  }
});

const RootStack = createBottomTabNavigator(
  {
    Restaurants: {
      screen: RestaurantsScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Inicio",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home-outline"
            type="material-community"
            size={30}
            color={tintColor}
          />
        )
      })
    },
    TopFive: {
      screen: TopFiveScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Top 5",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="star-outline"
            type="material-community"
            size={30}
            color={tintColor}
          />
        )
      })
    },
    Search: {
      screen: SearchScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Buscar",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="magnify"
            type="material-community"
            size={30}
            color={tintColor}
          />
        )
      })
    },
    MyAccount: {
      screen: MyAccountScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Mi Cuenta",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="account-outline"
            type="material-community"
            size={30}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Restaurants",
    order: ["Restaurants", "TopFive", "Search", "MyAccount"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#ffc107"
    }
  }
);

export default createAppContainer(RootStack);
