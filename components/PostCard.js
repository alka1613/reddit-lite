import { View, Text, Pressable } from "react-native";

export default function PostCard({ post, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#fff",
        padding: 12,
        marginHorizontal: 12,
        marginVertical: 8,
        borderRadius: 12,
        // soft shadow (iOS) / elevation (Android)
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
      }}
    >
      {/* Row: votes | content */}
      <View style={{ flexDirection: "row" }}>
        {/* Votes column */}
        <View
          style={{
            width: 54,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>⬆️</Text>
          <Text style={{ fontSize: 16, fontWeight: "700", marginVertical: 4 }}>
            {post.votes}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>⬇️</Text>
        </View>

        {/* Content column */}
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#7c7c7c", marginBottom: 6 }}>
            {post.subreddit} • {post.time} • by {post.author}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600", lineHeight: 22 }}>
            {post.title}
          </Text>

          {/* Footer row: comments badge */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              gap: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "#f2f2f2",
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 999,
              }}
            >
              <Text>💬 {post.comments} comments</Text>
            </View>
            <View
              style={{
                backgroundColor: "#eef7ff",
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 999,
              }}
            >
              <Text>Save</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
