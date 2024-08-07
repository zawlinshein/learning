import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import TutorialContainer from "@/components/TutorialContainer";
import { Circle, Svg } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Btn from "@/components/Btn";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ThirdTutorial = () => {
  const r = useSharedValue(50);

  const handlePress = () => {
    r.value += 20;
  };

  const reset = () => {
    r.value = 50;
  };

  const { width } = useWindowDimensions();

  const animatedProps = useAnimatedProps(() => ({ r: withTiming(r.value) }));

  return (
    <TutorialContainer lesson={3}>
      <Svg>
        <AnimatedCircle
          cx="50%"
          cy="50%"
          r={r}
          fill="#b58df1"
          animatedProps={animatedProps}
        />
      </Svg>
      <Btn text="press me" onPress={handlePress} />
      <Btn text="press me" onPress={reset} />
    </TutorialContainer>
  );
};

export default ThirdTutorial;

const styles = StyleSheet.create({});
