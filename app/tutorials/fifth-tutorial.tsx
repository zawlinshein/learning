import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TutorialContainer from "@/components/TutorialContainer";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import globalStyles from "@/constants/globalStyes";
import Btn from "@/components/Btn";

const OFFSET = 20;
const duration = 300;

const FifthTutorial = () => {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const handlePress = () => {
    offset.value = withSequence(
      withTiming(-OFFSET, { duration: duration / 2 }),
      withRepeat(withTiming(OFFSET, { duration }), 5, true),
      withTiming(0, { duration: duration / 2 })
    );
  };

  const reset = () => {
    offset.value = 0;
  };

  return (
    <TutorialContainer lesson={5} about="Using modifier">
      <Animated.View style={[globalStyles.box, animatedStyle]} />
      <Btn onPress={handlePress} text="press me" />
      <Btn text="reset" onPress={reset} />
    </TutorialContainer>
  );
};

export default FifthTutorial;

const styles = StyleSheet.create({});
