import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Character } from "../services/api";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "CharacterDetail"
>;

export default function CharacterCard({ item }: { item: Character }) {
const navigation = useNavigation<NavigationProp>();

  return (
   <TouchableOpacity
  onPress={() =>
    navigation.navigate("CharacterDetail", { id: item.id })
  }
>
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.info}>{item.race}</Text>
        <Text style={styles.info}>Ki: {item.ki}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    fontSize: 14,
  },
});
