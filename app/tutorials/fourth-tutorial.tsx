import Btn from "@/components/Btn";
import TutorialContainer from "@/components/TutorialContainer";
import React from "react";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
  withSpring,
} from "react-native-reanimated";

const duration = 2000;

export default function FourthTutorial() {
  const { width } = useWindowDimensions();

  const linear = useSharedValue<number>(width - 280);
  const inOut = useSharedValue<number>(width - 280);

  const animatedInOut = useAnimatedStyle(() => ({
    transform: [{ translateX: inOut.value }],
  }));
  const animatedLinear = useAnimatedStyle(() => ({
    transform: [{ translateX: -linear.value }],
  }));

  React.useEffect(() => {
    linear.value = withRepeat(
      withTiming(-linear.value, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true
    );
    inOut.value = withRepeat(
      withTiming(-inOut.value, {
        duration,
        easing: Easing.inOut(Easing.quad),
      }),
      -1,
      true
    );
  }, []);

  return (
    <TutorialContainer lesson={4} about="Customizing animations">
      <Animated.View style={[styles.box, animatedInOut]}>
        <Text style={styles.text}>inout</Text>
      </Animated.View>
      <Animated.View style={[styles.box, animatedLinear]}>
        <Text style={styles.text}>linear</Text>
      </Animated.View>
    </TutorialContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  box: {
    height: 80,
    width: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: "#b58df1",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#b58df1",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
