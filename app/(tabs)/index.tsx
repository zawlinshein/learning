import { Feather } from "@expo/vector-icons";
import {
  Canvas,
  Circle,
  dist,
  Image,
  ImageShader,
  makeImageFromView,
  SkImage,
  vec,
} from "@shopify/react-native-skia";
import { useCallback, useRef, useState } from "react";
import {
  Dimensions,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const { width, height } = Dimensions.get("window");
const corners = [vec(0, 0), vec(width, 0), vec(width, height), vec(0, height)];

export default function Index() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [active, setActive] = useState<boolean>(false);

  const image1 = useSharedValue<SkImage | null>(null);
  const image2 = useSharedValue<SkImage | null>(null);

  const ref = useRef<View>(null);

  const cx = useSharedValue(0);
  const cy = useSharedValue(0);
  const cr = useSharedValue(0);

  const { top } = useSafeAreaInsets();

  const toggle = useCallback(
    async (e: { x: number; y: number }) => {
      console.log("clicking toggle button -->", theme);
      if (active) return;
      const newTheme = theme === "dark" ? "light" : "dark";
      setActive(true);
      console.log(e);
      cx.value = e.x;
      cy.value = e.y;

      const firstImage = await makeImageFromView(ref);

      image1.value = firstImage;

      await wait(16);
      setTheme(newTheme);

      await wait(100);

      const secondeImage = await makeImageFromView(ref);
      image2.value = secondeImage;

      await wait(16);

      const r = Math.max(
        ...corners.map((corner) => dist(corner, { x: e.x, y: e.y }))
      );
      cr.value = withTiming(r, { duration: 650 }, (finished) => {
        if (finished) {
          image1.value = null;
          image2.value = null;
          cr.value = 0;
        }
      });
      await wait(650);
      setActive(false);
    },
    [theme, active, ref]
  );

  console.log("rendering");

  return (
    <>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme === "dark" ? "black" : "white"}
      />
      <View
        ref={ref}
        style={[
          styles.container,
          {
            backgroundColor: theme === "dark" ? "black" : "white",
            top: StatusBar.currentHeight,
          },
        ]}
      >
        {/* <GestureDetector gesture={tap}> */}
        <Pressable
          disabled={active}
          onPress={(e) => {
            toggle({ x: e.nativeEvent.pageX, y: e.nativeEvent.pageY });
          }}
        >
          <Feather
            onLayout={(e) => {
              cx.value = e.nativeEvent.layout.x;
              cy.value = e.nativeEvent.layout.y;
            }}
            name={theme === "dark" ? "moon" : "sun"}
            size={32}
            color={theme === "dark" ? "white" : "black"}
          />
        </Pressable>
        {/* </GestureDetector> */}
        <Text
          style={{
            color: theme === "dark" ? "white" : "black",
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          {theme}
        </Text>
        <Text
          style={{
            color: theme === "dark" ? "white" : "black",
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          {theme}
        </Text>
        <Text
          style={{
            color: theme === "dark" ? "white" : "black",
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          {theme}
        </Text>
        <Text
          style={{
            color: theme === "dark" ? "white" : "black",
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          {theme}
        </Text>
        <Text
          style={{
            color: theme === "dark" ? "white" : "black",
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          {theme}
        </Text>
        <Text
          style={{
            color: theme === "dark" ? "white" : "black",
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          {theme}
        </Text>
        <Text
          style={{
            color: theme === "dark" ? "white" : "black",
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          {theme}
        </Text>
        <Text
          style={{
            color: theme === "dark" ? "white" : "black",
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          {theme}
        </Text>
        <Text
          style={{
            color: theme === "dark" ? "white" : "black",
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          {theme}
        </Text>
      </View>
      {active && (
        <Canvas
          pointerEvents="none"
          style={[StyleSheet.absoluteFill, { top: top / 4.5 }]}
        >
          <Image image={image1} x={0} y={0} width={width} height={height} />
          <Circle cx={cx} cy={cy} r={cr}>
            <ImageShader
              image={image2}
              x={0}
              y={0}
              width={width}
              height={height}
              fit="contain"
            />
          </Circle>
        </Canvas>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
