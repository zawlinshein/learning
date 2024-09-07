import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  noPadding?: boolean;
};

const Container: FC<Props> = ({ children, noPadding = false }) => {
  return (
    <View style={[styles.container, { padding: noPadding ? 0 : 16 }]}>
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
