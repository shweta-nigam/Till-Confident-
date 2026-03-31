// CharacterDetailScreen.tsx

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { getCharacterById, CharacterDetails } from "../services/api";

/* route type */
type RouteParams = {
  params: {
    id: number;
  };
};

export default function CharacterDetailScreen() {
  const route = useRoute<RouteProp<RouteParams, "params">>();
  const { id } = route.params;

  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /* fetch character */
  const fetchCharacter = async () => {
    try {
      setLoading(true);
      const data = await getCharacterById(id);
      setCharacter(data);
      setError(null);
    } catch (err) {
      setError("Failed to load character");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  /* loading state */
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  /* error state */
  if (error || !character) {
    return (
      <View style={styles.center}>
        <Text>{error || "No data found"}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* character image */}
      <Image source={{ uri: character.image }} style={styles.image} />

      {/* basic info */}
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.info}>Race: {character.race}</Text>
      <Text style={styles.info}>Gender: {character.gender}</Text>
      <Text style={styles.info}>Ki: {character.ki}</Text>
      <Text style={styles.info}>Max Ki: {character.maxKi}</Text>
      <Text style={styles.info}>Affiliation: {character.affiliation}</Text>

      {/* description */}
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{character.description}</Text>

      {/* origin planet */}
      {character.originPlanet && (
        <>
          <Text style={styles.sectionTitle}>Origin Planet</Text>
          <View style={styles.planetCard}>
            <Image
              source={{ uri: character.originPlanet.image }}
              style={styles.planetImage}
            />
            <Text style={styles.planetName}>
              {character.originPlanet.name}
            </Text>
          </View>
        </>
      )}

      {/* transformations */}
      <Text style={styles.sectionTitle}>Transformations</Text>

      {character.transformations.length === 0 ? (
        <Text style={styles.info}>No transformations available</Text>
      ) : (
        character.transformations.map((t) => (
          <View key={t.id} style={styles.transformationCard}>
            <Image source={{ uri: t.image }} style={styles.transImage} />
            <Text style={styles.transName}>{t.name}</Text>
            <Text style={styles.info}>Ki: {t.ki}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

/* styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  info: {
    fontSize: 14,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  planetCard: {
    marginTop: 6,
    marginBottom: 10,
  },
  planetImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  planetName: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
  },
  transformationCard: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  transImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  transName: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});