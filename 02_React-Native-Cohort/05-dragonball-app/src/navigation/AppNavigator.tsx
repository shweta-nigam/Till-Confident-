// navigation/AppNavigator.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "../screens/HomeScreen";
import CharacterListScreen from "../screens/CharacterListScreen";
import PlanetScreen from "../screens/PlanetScreen";
import FavoriteScreen from "../screens/FavoritesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CharacterDetailScreen from "../screens/CharacterDetailScreen";
import PlanetDetailScreen from "../screens/PlanetDetailScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/* Home Stack */
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
    </Stack.Navigator>
  );
}

/* Character Stack */
function CharacterStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CharacterMain" component={CharacterListScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
    </Stack.Navigator>
  );
}

/* Planet Stack */
function PlanetStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PlanetMain" component={PlanetScreen} />
      <Stack.Screen name="PlanetDetail" component={PlanetDetailScreen} />
    </Stack.Navigator>
  );
}

/* Favorite Stack */
function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoriteMain" component={FavoriteScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
    </Stack.Navigator>
  );
}

/* Settings Stack */
function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsMain" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

/* Main Tab Navigator */
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Characters" component={CharacterStack} />
        <Tab.Screen name="Planets" component={PlanetStack} />
        <Tab.Screen name="Favorites" component={FavoriteStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}