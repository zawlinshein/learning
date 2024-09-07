import { ThemeProvider } from "@/app/_layout";
import React, { forwardRef, useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  text: string;
};

const Btn = forwardRef<TouchableOpacity, Props>(
  ({ text, style, ...other }, ref) => {
    const theme = useContext(ThemeProvider);

    const styles = useStyle(theme?.theme);

    return (
      <TouchableOpacity style={[styles.btn, style]} {...other} ref={ref}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
);

export default Btn;

const useStyle = (theme: "light" | "dark" = "light") => {
  return StyleSheet.create({
    btn: {
      width: "100%",
      backgroundColor: theme === "light" ? "black" : "white",
      padding: 12,
      borderRadius: 16,
    },
    text: {
      color: theme === "light" ? "white" : "black",
      textAlign: "center",
    },
  });
};
