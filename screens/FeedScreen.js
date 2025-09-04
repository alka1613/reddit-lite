import { View, Text, FlatList } from "react-native";
import { POSTS } from "../data/posts";
import PostCard from "../components/PostCard";

export default function FeedScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
      {/* Header */}
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 12,
          paddingHorizontal: 16,
          backgroundColor: "#ffffff",
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Home</Text>
        <Text style={{ color: "#6b7280", marginTop: 2 }}>
          Trending posts on Reddit Lite
        </Text>
      </View>

      {/* FlatList feed */}
      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} onPress={() => {}} />}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </View>
  );
}
