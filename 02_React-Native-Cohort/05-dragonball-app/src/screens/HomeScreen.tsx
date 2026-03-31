import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* logo */}

      <View style={{ flex: 1, alignItems: "flex-start", marginTop: 40 }}>
        <Image
          source={require("../../assets/app-logo.webp")}
          style={{ width: 200, height: 100 }}
          resizeMode="contain"
        />
      </View>

      {/* Radar Card */}
      <View style={styles.radarCard}>
        <Image
          source={require("../../assets/radar-img.webp")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      {/* Planet List */}
      <View style={styles.list}>
        <PlanetItem title="Earth" />
        <PlanetItem title="Namek" />
        <PlanetItem title="Planet Vegeta" />
        <PlanetItem title="Beerus' Planet" />
        <PlanetItem title="Supreme Kai’s World" />
      </View>
    </ScrollView>
  );
}

/* reusable planet item */
function PlanetItem({ title }: { title: string }) {
  return (
    <View style={styles.planetCard}>
      <Text style={styles.planetText}>{title}</Text>
    </View>
  );
}

/* styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  radarCard: {
    height: 200,
    margin: 16,
    borderRadius: 20,
    backgroundColor: "#1e2a5a",
    justifyContent: "center",
    alignItems: "center",

    marginHorizontal: 16,
    overflow: "hidden",
  },
  list: {
    paddingHorizontal: 16,
  },
  planetCard: {
    height: 70,
    borderRadius: 12,
    backgroundColor: "#2a3a7a",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  planetText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
