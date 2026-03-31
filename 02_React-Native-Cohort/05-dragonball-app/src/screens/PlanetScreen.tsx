
import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { getPlanets, Planet } from "../services/api";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PlanetDetail"
>;

export default function PlanetScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [planets, setPlanets] = useState<Planet[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // search + filter state
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"ALL" | "DESTROYED" | "ACTIVE">("ALL");

  /* fetch planets */
  const fetchPlanets = async (pageNum = 1) => {
    try {
      const res = await getPlanets(pageNum);

      const newData =
        pageNum === 1 ? res.items : [...planets, ...res.items];

      setPlanets(newData);
      setHasMore(pageNum < res.meta.totalPages);
      setPage(pageNum);
    } catch (err) {
      console.log("Error fetching planets");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets(1);
  }, []);

  /* load more */
  const loadMore = () => {
    if (!hasMore) return;
    fetchPlanets(page + 1);
  };

  /* apply search + filter locally */
  useEffect(() => {
    let data = [...planets];

    // search filter
    if (search) {
      data = data.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // status filter
    if (filter === "DESTROYED") {
      data = data.filter((p) => p.isDestroyed);
    } else if (filter === "ACTIVE") {
      data = data.filter((p) => !p.isDestroyed);
    }

    setFilteredPlanets(data);
  }, [search, filter, planets]);

  if (search || filter !== "ALL") return;

  /* render item */
  const renderItem = ({ item }: { item: Planet }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("PlanetDetail", { id: item.id })
      }
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.isDestroyed ? "Destroyed" : "Active"}</Text>
    </TouchableOpacity>
  );

  if (loading && planets.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* search input */}
      <TextInput
        placeholder="Search planets..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      {/* filter buttons */}
      <View style={styles.filterRow}>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setFilter("ALL")}
        >
          <Text>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setFilter("ACTIVE")}
        >
          <Text>Active</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setFilter("DESTROYED")}
        >
          <Text>Destroyed</Text>
        </TouchableOpacity>
      </View>

      {/* list */}
      <FlatList
        data={filteredPlanets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  filterBtn: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 6,
  },
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
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});