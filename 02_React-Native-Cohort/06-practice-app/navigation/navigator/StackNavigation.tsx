import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreens from "../screens/HomeScreens";
import AboutScreens from "../screens/AboutScreens";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={HomeScreens}
        options={{
          presentation:"modal",  // what use? -> behavior - what type ? 
          title: "My Home",
          headerStyle: {
            backgroundColor: "pink",
          },
        }}
      />
      <Stack.Screen name="About" component={AboutScreens} />
      <Stack.Screen
        name="Detail"
        component={DetailsScreen}
        initialParams={{ id: 1 }} // default value
      />
    </Stack.Navigator>
  );
}
