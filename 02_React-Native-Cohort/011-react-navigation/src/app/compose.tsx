import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const HomeScreen = () => {
const isActive = true 

const buttonStyle = StyleSheet.compose(
    styles.button,
    isActive ? styles.activeButton: null
)


// compose --- when you have multiple styles

  return (
 <>
 <View >
    <View style={buttonStyle}>
        <Text style={styles.buttonText}>
Compose  Button
        </Text>
    </View>
 </View>
 </>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: '#ccc',   // Default grey
  },
  activeButton: {
    backgroundColor: '#6C63FF', // Override to purple when active
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
