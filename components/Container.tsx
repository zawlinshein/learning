import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Container: FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
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
