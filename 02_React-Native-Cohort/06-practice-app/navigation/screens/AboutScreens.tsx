import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const AboutScreens = ({ navigation }: any) => {
    //Here we're able to destructure navigation as props because -- > React Navigation automatically injects it into screens
  return (
    <View>
      <Text>AboutScreens</Text>
      <Button title=" go back" onPress={() => navigation.goBack()} />    
        // another approach 
           <Button title=" go back" onPress={() => navigation.push("About")} />   
            {/* // going in about - as much as you click the button, same clicks will be needed to come out as well  */}
    </View>
  );
};

export default AboutScreens;

//notes:
// Screen → gets navigation via props
// Child → useNavigation()

const styles = StyleSheet.create({});
