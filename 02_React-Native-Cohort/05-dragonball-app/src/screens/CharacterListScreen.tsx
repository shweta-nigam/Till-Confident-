import React from "react";
import { View, FlatList, TextInput, StyleSheet, ActivityIndicator } from "react-native";
import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";
import ErrorView from "../components/ErrorView";

export default function CharacterListScreen() {
  const {
    characters,
    loading,
    error,
    loadMore,
    refresh,
    isFetchingMore,
    setSearch,
    applyFilters,
    clearFilters,
  } = useCharacters();

  if (loading && characters.length === 0) {
    return <Loader />;
  }

  if (error && characters.length === 0) {
    return <ErrorView message={error} />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search characters..."
        style={styles.search}
        onChangeText={setSearch}
      />

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterCard item={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        refreshing={loading}
        onRefresh={refresh}
        ListFooterComponent={
          isFetchingMore ? <ActivityIndicator style={{ margin: 16 }} /> : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});