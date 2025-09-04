import { useState, useMemo } from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import { POSTS } from "../data/posts";
import PostCard from "../components/PostCard";

export default function SearchScreen() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return POSTS;
    return POSTS.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.subreddit.toLowerCase().includes(term) ||
        p.author.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
      {/* Search bar */}
      <View
        style={{
          padding: 12,
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
        }}
      >
        <TextInput
          placeholder="Search posts, subreddits, authors..."
          value={q}
          onChangeText={setQ}
          autoCapitalize="none"
          style={{
            backgroundColor: "#f3f4f6",
            paddingHorizontal: 14,
            paddingVertical: 12,
            borderRadius: 12,
            fontSize: 16,
          }}
        />
      </View>

      {results.length === 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <Text style={{ color: "#6b7280" }}>No results found.</Text>
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostCard post={item} onPress={() => {}} />}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingVertical: 8 }}
        />
      )}
    </View>
  );
}
