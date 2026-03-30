import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  getPokemonByType,
  getPokemonList,
  PokemonDetail,
  PokemonRef,
} from "../../api/pokemon";
import { COLORS } from "../../constant/colors";
import SearchInput from "../../components/search-input";
import FilterChips from "../../components/filter-chips";
import AppHeader from "../../components/app-header";
import { StatusBar } from "expo-status-bar";
import PokemonCard from "../../components/pokemon-card";

const HomeScree = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(true);
  const [masterList, setMasterList] = useState<PokemonRef[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const [page, setPage] = useState(1);

  const PAGE_SIZE = 20;

  useEffect(() => {
    fetchData();
  }, [selectedType]);

  const fetchData = async () => {
    setLoading(true);
    setPage(1);
    try {
      if (selectedType) {
        const list = await getPokemonByType(selectedType);
        setMasterList(list);
      }
    } catch (error) {
      const data = await getPokemonList(1000, 0);
      setMasterList(data.results);
    } finally {
      setLoading(false);
    }
  };

  const filteredList = useMemo(() => {
    // Filters Pokémon based on search text
    if (!searchText) return masterList;
    return masterList.filter((p) => p.name.includes(searchText.toLowerCase()));
  }, [masterList, searchText]);

  const displayList = useMemo(() => {
    // Controls how many items are shown
    return filteredList.slice(0, page * PAGE_SIZE);
  }, [filteredList, page]);

  //note: useMemo remembers (caches) a calculated value so it doesn’t run again unnecessarily.

  const loadMore = () => {
    if (displayList.length < filteredList.length) {
      setPage((prev) => prev + 1);
    }
  }; // If there are still more items left to show, increase the page to load more. ex: Amazon product list

 const handleCardPress = (pokemon:PokemonDetail)=>{
    navigation.navigate("PokemonDetail" , {pokemon})
  }

return (
    <View style={styles.container}>
       <StatusBar style="light" />
       <AppHeader title="PokeDex" showLogo/>
          <View style={styles.content}>
        <View style={styles.searchContainer}>
          <SearchInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search Pokemon..."
            onClear={() => setSearchText("")}
          />
        </View>

        <View style={styles.filterContainer}>
          <FilterChips
            selectedType={selectedType}
            onSelectType={setSelectedType}
          />
        </View>

        {loading && page === 1 ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color={COLORS.accentEmerald} />
          </View>
        ) : (
          <FlatList
            data={displayList}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <PokemonCard
                name={item.name}
                url={item.url}
                onPress={handleCardPress}
              />
            )}
            contentContainerStyle={styles.listContent}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
          />
        )}
      </View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
    paddingBottom: 0,
  },
  filterContainer: {
    marginTop: 8,
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// State variables :-
// State variables are dynamic data that control what your UI shows.
//(FlatList expects array)
