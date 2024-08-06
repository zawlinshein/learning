import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import Btn from "@/components/Btn";
import TutorialContainer from "@/components/TutorialContainer";

const FirstTutorial = () => {
  const width = useSharedValue(100);

  const { width: deviceWidth } = useWindowDimensions();

  const handlePress = () => {
    if (width.value >= deviceWidth - 32) return;
    width.value = withSpring(width.value + 50);
  };

  const reset = () => {
    width.value = withSpring(100);
  };

  return (
    <TutorialContainer lesson={1}>
      <Animated.View style={{ ...styles.box, width }}></Animated.View>

      <Btn text="press me" onPress={handlePress} />
      <Btn text="reset" onPress={reset} />
    </TutorialContainer>
  );
};

export default FirstTutorial;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "violet",
    alignSelf: "center",
  },
  container: {
    gap: 12,
  },
});
