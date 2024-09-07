import Btn from "@/components/Btn";
import TutorialContainer from "@/components/TutorialContainer";
import React from "react";
import { LayoutChangeEvent, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const SixthTutorial = () => {
  const pressed = useSharedValue<boolean>(false);

  const offsetX = useSharedValue<number>(0);
  const offsetY = useSharedValue<number>(0);
  const drag = useSharedValue<boolean>(false);
  const width = useSharedValue<number>(0);
  const height = useSharedValue<number>(0);

  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const onLayout = (event: LayoutChangeEvent) => {
    width.value = event.nativeEvent.layout.width;
    height.value = event.nativeEvent.layout.height;
  };

  const pan = Gesture.Pan()
    .onBegin(() => {
      drag.value = true;
    })
    .onChange((event) => {
      offsetX.value = event.translationX;
      offsetY.value = event.translationY;
    })
    .onFinalize((event) => {
      offsetX.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [
          -(width.value / 2) + 120 / 2 + 50,
          width.value / 2 - 120 / 2 - 50,
        ],
      });
      offsetY.value = withDecay({
        velocity: event.velocityY,
        rubberBandEffect: true,
        clamp: [
          -(height.value / 2) + 120 / 2 + 50,
          height.value / 2 - 120 / 2 - 50,
        ],
      });
      drag.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? "#FFE04B" : "#B58DF1",
    transform: [{ scale: withTiming(pressed.value ? 1.2 : 0.7) }],
  }));

  const draggableAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offsetX.value },
      { translateY: offsetY.value },
      { scale: withTiming(drag.value ? 1.2 : 1) },
    ],
    backgroundColor: drag.value ? "#FFE04B" : "#b58df1",
    zIndex: 100,
  }));

  return (
    <TutorialContainer
      lesson={6}
      about="Using gesture handler with withDecay()"
    >
      <View style={styles.container} onLayout={onLayout}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.circle, draggableAnimatedStyles]}>
            <Text style={styles.text}>Throw me</Text>
          </Animated.View>
        </GestureDetector>
        <GestureDetector gesture={tap}>
          <Animated.View style={[styles.circle, animatedStyles]} />
        </GestureDetector>
      </View>
      <Btn
        text={"reset"}
        onPress={() => {
          offsetX.value = withSpring(0);
          offsetY.value = withSpring(0);
          drag.value = false;
        }}
      />
    </TutorialContainer>
  );
};

export default SixthTutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 24,
  },
  circle: {
    height: 120,
    width: 120,
    padding: 12,
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});
