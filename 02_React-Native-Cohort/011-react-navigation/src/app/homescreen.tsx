import { View, Text, StatusBar } from "react-native";
import React from "react";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const homescreen = () => {
  const insets = useSafeAreaInsets(); // hook - detects safe area
// insets value are read only - you can not customize it

  console.log(insets);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top, // controlling each component
        paddingBottom: insets.bottom,
      }}
    >
        <StatusBar barStyle={"dark-content"} /> // control wifi,time etc. at bar 
      <Text>homescreen</Text>
    </View>
  );
};

export default homescreen;
