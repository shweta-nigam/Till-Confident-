import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreens from "../screens/HomeScreens";
import ProfileScreens from "../screens/ProfileScreens";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveBackgroundColor: "gray",
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          tabBarLabel: "active",
          tabBarIcon: ({ color, size, focused }) => (
            //   Above: color,size etc can be destructured and can be used to render different things according to logic
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={"tomato"}
            />
          ),
        }}
      />

      {/* icon lib here */}
      <Tab.Screen name="Profile" component={ProfileScreens} />
    </Tab.Navigator>
  );
}
