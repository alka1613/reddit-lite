import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

// Screens
import FeedScreen from "./screens/FeedScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: "#111827",
              tabBarInactiveTintColor: "#9ca3af",
              tabBarStyle: {
                height: 60,
                paddingBottom: 8,
                paddingTop: 8,
                borderTopWidth: 1,
                borderTopColor: "#eee",
                backgroundColor: "#fff",
              },
              tabBarIcon: ({ color, size, focused }) => {
                let iconName = "home-outline";
                if (route.name === "Feed") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Search") {
                  iconName = focused ? "search" : "search-outline";
                } else if (route.name === "Profile") {
                  iconName = focused ? "person" : "person-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
