import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useNavigation } from "@react-navigation/native";

const HomeScreens = () => {
  const navigation = useNavigation<any>(); // hook -> has many methods
  return (
    <View>
      <Text>HomeScreens</Text>
      <Button
        title=" go to about"
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title=" go to details"
        onPress={() => navigation.navigate("Detail",{
            id:101
        })}         // this data can be destructured in route
      />
      <Link screen="About" params={{id:1,name:"Sammy"}}>Again on about</Link>
      {/* // params -> what data to send ,  data ===>Any serializable JavaScript data */}
    </View>
  );
};

export default HomeScreens;
// note: you can use Link tag in alternate to Button tag

const styles = StyleSheet.create({});
