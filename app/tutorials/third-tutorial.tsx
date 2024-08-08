import Btn from "@/components/Btn";
import TutorialContainer from "@/components/TutorialContainer";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ThirdTutorial = () => {
  const r = useSharedValue(50);

  const handlePress = () => {
    r.value += 20;
  };

  const reset = () => {
    r.value = 50;
  };

  const animatedProps = useAnimatedProps(() => ({ r: withTiming(r.value) }));

  return (
    <TutorialContainer lesson={3} about="Animate with props ( not with style )">
      <Svg height={250} width="100%" viewBox="">
        <AnimatedCircle
          cx="50%"
          cy="50%"
          r={r}
          fill="violet"
          animatedProps={animatedProps}
        />
      </Svg>
      <Btn text="press me" onPress={handlePress} />
      <Btn text="reset" onPress={reset} />
    </TutorialContainer>
  );
};

export default ThirdTutorial;

const styles = StyleSheet.create({});
