import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function UnsafeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
        Header (bleeds under notch!)
      </Text>
      <Text style={{ color: "#aaa", padding: 16 }}>
        This content might be hidden behind the status bar in dark mode.
      </Text>
    </View>
  );
}
function SafeScreen() {
  return (
    <SafeAreaView 
    edges={["bottom"]}
    style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
        Header (bleeds under notch!)
      </Text>
      <Text style={{ color: "#aaa", padding: 16 }}>
        This content might be hidden behind the status bar in dark mode.
      </Text>
    </SafeAreaView>
  );
}




export default function Index() {
  return (
    <>
    {/* <UnsafeScreen /> */}


    {/* safe area screen */}
    <SafeScreen />
    </>
  );
}
