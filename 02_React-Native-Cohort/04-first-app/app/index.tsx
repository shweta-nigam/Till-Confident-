import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import {
  useFonts,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_400Regular,
  });
  if (!fontsLoaded) return null;

  return (
    <>
      {/* header */}
      <View style={styles.header}>
        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Image
            source={require("../assets/myImg/profile.png")}
            style={{ width: 40, height: 40, marginRight: 10 }}
          />

          <View style={{ display: "flex" }}>
            <Text style={styles.subLabel}>Hello!</Text>
            <Text>Stella </Text>
          </View>
        </View>
        <Image
          source={require("../assets/myImg/bell.png")}
          style={{ width: 20, height: 20 }}
        />
      </View>

      {/* status  */}
      <View style={styles.statusCard}>
        {/* LEFT CONTENT */}
        <View style={styles.statusLeft}>
          <Text style={styles.statusText}>Your today's task almost done</Text>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>View Task</Text>
          </TouchableOpacity>
        </View>

        {/* RIGHT IMAGE */}
        <Image
          source={require("../assets/myImg/p-img.png")}
          style={styles.statusImage}
        />

        {/* FLOATING IMAGE */}
        <Image
          source={require("../assets/myImg/s-img.webp")}
          style={styles.floatingImage}
        />
      </View>

      {/* progress bar - horizontal scroll */}
      <View>
        <Text style={styles.boldText}>In Progress</Text>
        {/* cards container ----------------- */}

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* card 1 */}
          <View style={styles.progressCard}>
            <View
              style={[
                styles.progressIconContainer,
                { backgroundColor: "#f7d9ff" },
              ]}
            >
              <Ionicons name="briefcase" size={20} color="#cd58ed" />
            </View>

            <Text style={styles.subLabel}>Mobile Dev</Text>
            <Text style={styles.cardTitle}>Grocery App</Text>

            <View style={styles.lineContainer}>
              <View
                style={[
                  styles.lineFill,
                  { width: "60%", backgroundColor: "#cd58ed" },
                ]}
              />
            </View>
          </View>

          {/* card 2 */}
          <View style={styles.progressCard}>
            <View
              style={[
                styles.progressIconContainer,
                { backgroundColor: "#d9f3ff" },
              ]}
            >
              <Ionicons name="code-slash" size={20} color="#3b82f6" />
            </View>

            <Text style={styles.subLabel}>Development</Text>
            <Text style={styles.cardTitle}>Portfolio Site</Text>

            <View style={styles.lineContainer}>
              <View
                style={[
                  styles.lineFill,
                  { width: "45%", backgroundColor: "#3b82f6" },
                ]}
              />
            </View>
          </View>

          {/* card 3 */}
          <View style={styles.progressCard}>
            <View
              style={[
                styles.progressIconContainer,
                { backgroundColor: "#ffe4d9" },
              ]}
            >
              <Ionicons name="color-palette" size={20} color="#f97316" />
            </View>

            <Text style={styles.subLabel}>UI Design</Text>
            <Text style={styles.cardTitle}>Dashboard UI</Text>

            <View style={styles.lineContainer}>
              <View
                style={[
                  styles.lineFill,
                  { width: "75%", backgroundColor: "#f97316" },
                ]}
              />
            </View>
          </View>

          {/* card 4 */}
          <View style={styles.progressCard}>
            <View
              style={[
                styles.progressIconContainer,
                { backgroundColor: "#e0ffe9" },
              ]}
            >
              <Ionicons name="analytics" size={20} color="#22c55e" />
            </View>

            <Text style={styles.subLabel}>Analytics</Text>
            <Text style={styles.cardTitle}>User Metrics</Text>

            <View style={styles.lineContainer}>
              <View
                style={[
                  styles.lineFill,
                  { width: "50%", backgroundColor: "#22c55e" },
                ]}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* tasks bar */}
      <View style={{ flex: 1 }}>
        <Text style={styles.boldText}>Tasks Groups</Text>

        {/* // tasks cards container - vertical scroll */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* t-card 1 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#f7d9ff" }]}
            >
              <Ionicons name="briefcase" size={24} color="#cd58ed" />
            </View>

            <View>
              <Text>Office Project</Text>
              <Text style={styles.subLabel}>23 Tasks </Text>
            </View>

            {/* circular progress */}
            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={75}
              tintColor="#cd58ed"
              backgroundColor="#f7d9ff"
            >
              {(fill: number) => (
                <Text style={{}}>{`${Math.round(fill)}%`}</Text>
              )}
            </AnimatedCircularProgress>
          </View>

          {/* t-card 2 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#d9f3ff" }]}
            >
              <Ionicons name="code-slash" size={24} color="#3b82f6" />
            </View>

            <View>
              <Text>Development</Text>
              <Text style={styles.subLabel}>18 Tasks</Text>
            </View>

            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={60}
              tintColor="#3b82f6"
              backgroundColor="#d9f3ff"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>

          {/* t-card 3 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#ffe4d9" }]}
            >
              <Ionicons name="color-palette" size={24} color="#f97316" />
            </View>

            <View>
              <Text>UI Design</Text>
              <Text style={styles.subLabel}>12 Tasks</Text>
            </View>

            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={45}
              tintColor="#f97316"
              backgroundColor="#ffe4d9"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>

          {/* card 4 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#e0ffe9" }]}
            >
              <Ionicons name="checkmark-done" size={24} color="#22c55e" />
            </View>
            <View>
              <Text>Completed Tasks</Text>
              <Text style={styles.subLabel}>30 Tasks</Text>
            </View>
            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={90}
              tintColor="#22c55e"
              backgroundColor="#e0ffe9"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>

          {/* card 5 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#fff4d9" }]}
            >
              <Ionicons name="time" size={24} color="#f59e0b" />
            </View>
            <View>
              <Text>Pending Tasks</Text>
              <Text style={styles.subLabel}>10 Tasks</Text>
            </View>
            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={40}
              tintColor="#f59e0b"
              backgroundColor="#fff4d9"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>

          {/* card 6 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#fde2ff" }]}
            >
              <Ionicons name="chatbubbles" size={24} color="#d946ef" />
            </View>
            <View>
              <Text>Client Messages</Text>
              <Text style={styles.subLabel}>8 Tasks</Text>
            </View>
            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={50}
              tintColor="#d946ef"
              backgroundColor="#fde2ff"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>

          {/* card 7 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#d9fff8" }]}
            >
              <Ionicons name="analytics" size={24} color="#14b8a6" />
            </View>
            <View>
              <Text>Analytics</Text>
              <Text style={styles.subLabel}>15 Tasks</Text>
            </View>
            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={70}
              tintColor="#14b8a6"
              backgroundColor="#d9fff8"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>

          {/* card 8 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#ffe9ec" }]}
            >
              <Ionicons name="heart" size={24} color="#ef4444" />
            </View>
            <View>
              <Text>Health Goals</Text>
              <Text style={styles.subLabel}>6 Tasks</Text>
            </View>
            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={35}
              tintColor="#ef4444"
              backgroundColor="#ffe9ec"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>

          {/* card 9 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#eef2ff" }]}
            >
              <Ionicons name="school" size={24} color="#6366f1" />
            </View>
            <View>
              <Text>Learning</Text>
              <Text style={styles.subLabel}>20 Tasks</Text>
            </View>
            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={65}
              tintColor="#6366f1"
              backgroundColor="#eef2ff"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>

          {/* card 10 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#f0fdf4" }]}
            >
              <Ionicons name="leaf" size={24} color="#16a34a" />
            </View>
            <View>
              <Text>Personal Growth</Text>
              <Text style={styles.subLabel}>9 Tasks</Text>
            </View>
            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={55}
              tintColor="#16a34a"
              backgroundColor="#f0fdf4"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>

          {/* card 11 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#fff7ed" }]}
            >
              <Ionicons name="cart" size={24} color="#f97316" />
            </View>
            <View>
              <Text>Shopping</Text>
              <Text style={styles.subLabel}>5 Tasks</Text>
            </View>
            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={30}
              tintColor="#f97316"
              backgroundColor="#fff7ed"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>

          {/* card 12 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#ecfeff" }]}
            >
              <Ionicons name="cloud" size={24} color="#06b6d4" />
            </View>
            <View>
              <Text>Cloud Sync</Text>
              <Text style={styles.subLabel}>11 Tasks</Text>
            </View>
            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={48}
              tintColor="#06b6d4"
              backgroundColor="#ecfeff"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>

          {/* card 13 */}
          <View style={styles.taskCard}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#faf5ff" }]}
            >
              <Ionicons name="lock-closed" size={24} color="#9333ea" />
            </View>
            <View>
              <Text>Security</Text>
              <Text style={styles.subLabel}>7 Tasks</Text>
            </View>
            <AnimatedCircularProgress
              size={50}
              width={6}
              fill={52}
              tintColor="#9333ea"
              backgroundColor="#faf5ff"
            >
              {(fill: number) => <Text>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  boldText: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    padding: 10,
  },
  subLabel: {
    fontSize: 12,
    color: "gray",
  },
  statusCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#39e7b1e3",
    padding: 15,
    borderRadius: 12,
    margin: 8,
    position: "relative",
  },

  statusLeft: {
    flex: 1,
    justifyContent: "space-between",
  },

  statusText: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },

  btn: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "flex-start",
    textAlign:"center"
  },

  btnText: {
    color: "#39e7b1e3",
    fontWeight: "600",
  },

  statusImage: {
    width: 90,
    height: 90,
    marginLeft: 10,
  },

  floatingImage: {
    position: "absolute",
    right: -10,
    top: -20,
    width: 70,
    height: 70,
  },
  progressCard: {
    position: "relative",
    width: 220,
    height: 80,
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#3be4b06b",
    padding: 10,
    borderRadius: 15,
    borderColor: "#6295a8",
    margin: 5,
  },
  lineContainer: {
    height: 3,
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  lineFill: {
    height: "100%",
    backgroundColor: "#b5dceb",
  },
  progressIcons: {
    width: 30,
    height: 30,
  },
  progressIconContainer: {
    width: 40,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    top: 5,
    right: 5,
  },
  tasksIcons: {
    width: 30,
    height: 30,
  },
  taskCard: {
    width: "100%",
    backgroundColor: "#fefaff",
    borderRadius: 10,
    gap: 30,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderColor: "#b5dceb",
  },
  taskIconContainer: {
    width: 40,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
