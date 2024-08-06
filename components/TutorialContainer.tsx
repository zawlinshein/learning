import { StyleSheet, Text, View } from "react-native";
import React, { FC, PropsWithChildren } from "react";
import globalStyles from "@/constants/globalStyes";

const TutorialContainer: FC<PropsWithChildren & { lesson: number }> = ({
  lesson,
  children,
}) => {
  return (
    <View style={globalStyles.container}>
      <Text>Lesson {lesson}</Text>
      {children}
    </View>
  );
};

export default TutorialContainer;

const styles = StyleSheet.create({});
