import {
  Button,
  ButtonProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React, { FC } from "react";

type Props = TouchableOpacityProps & {
  text: string;
};

const Btn: FC<Props> = ({ text, style, ...other }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} {...other}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: "black",
    padding: 12,
    borderRadius: 16,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
