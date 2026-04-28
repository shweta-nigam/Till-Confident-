import { View, Text } from "react-native";
import usePedometer from "../hook/usePedometer";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export function StepCounter() {
  const { isPedometerAvailable, pastStepCount, currentStepCount } =
    usePedometer();

  const goal = 10000;
  const fill = (currentStepCount / goal) * 100;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AnimatedCircularProgress
        size={220}
        width={15}
        fill={fill}
        tintColor="#6C63FF"
        backgroundColor="#2E2E2E"
        rotation={0}
        lineCap="round"
      >
        {() => (
          <View style={{ alignItems: "center" }}>
            <Text>{currentStepCount}</Text>
            <Text>Steps</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <Text>Pedometer Available: {String(isPedometerAvailable)}</Text>
      <Text>Steps (Last 24h): {pastStepCount}</Text>
    </View>
  );
}
