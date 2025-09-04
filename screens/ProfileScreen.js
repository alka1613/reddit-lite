import { View, Text, Image, Pressable } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Top banner */}
      <View
        style={{
          height: 120,
          backgroundColor: "#2563eb",
          justifyContent: "flex-end",
          padding: 16,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
          @you_build_it
        </Text>
        <Text style={{ color: "#e0e7ff" }}>Redditor since 2024</Text>
      </View>

      {/* Avatar row */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          gap: 12,
          marginTop: -28, // overlap banner
        }}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/120" }}
          style={{ width: 64, height: 64, borderRadius: 999, borderWidth: 3, borderColor: "#fff" }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>You Build It</Text>
          <Text style={{ color: "#6b7280" }}>Karma • 12,345</Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#111827",
            paddingHorizontal: 14,
            paddingVertical: 10,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Edit</Text>
        </Pressable>
      </View>

      {/* Stats row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 12,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#eee",
        }}
      >
        {[
          { label: "Posts", value: "18" },
          { label: "Followers", value: "203" },
          { label: "Following", value: "89" },
        ].map((s) => (
          <View key={s.label} style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>{s.value}</Text>
            <Text style={{ color: "#6b7280" }}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* Bio */}
      <View style={{ padding: 16 }}>
        <Text style={{ fontWeight: "700", marginBottom: 6 }}>Bio</Text>
        <Text style={{ color: "#374151", lineHeight: 20 }}>
          Building with React Native + Expo. Coffee, keyboards, and clean layout
          grids. 🚀
        </Text>
      </View>
    </View>
  );
}
