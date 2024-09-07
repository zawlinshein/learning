import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "../_layout";
import { Canvas, Circle } from "@shopify/react-native-skia";

const SettingPage = () => {
  const theme = useContext(ThemeProvider);

  const styles = useStyle(theme?.theme);

  return (
    <View style={styles.container}>
      <Canvas style={{ flex: 1 }}>
        <Circle cx={200} cy={200} r={100} color={"red"} />
      </Canvas>
    </View>
  );
};

export default SettingPage;

const useStyle = (theme: "light" | "dark" = "light") => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme === "dark" ? "black" : "white",
      flex: 1,
    },
  });
};
