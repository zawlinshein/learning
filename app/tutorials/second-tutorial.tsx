import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import TutorialContainer from "@/components/TutorialContainer";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import globalStyles from "@/constants/globalStyes";
import Btn from "@/components/Btn";

const SecondTutorial = () => {
  const translateX = useSharedValue(0);

  const { width } = useWindowDimensions();

  const handlePress = () => {
    if (translateX.value >= width - 32) return;
    translateX.value = translateX.value + 50;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 1) }],
  }));

  const reset = () => {
    translateX.value = withSpring(0);
  };

  return (
    <TutorialContainer lesson={2} about="Using useAnimatedStyle()">
      <Animated.View style={[globalStyles.box, animatedStyles]}></Animated.View>
      <Btn text="press me" onPress={handlePress} />
      <Btn text="reset" onPress={reset} />
    </TutorialContainer>
  );
};

export default SecondTutorial;

const styles = StyleSheet.create({});
