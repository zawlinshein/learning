import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import Container from "@/components/Container";
import Btn from "@/components/Btn";
import FirstTutorial from "../tutorials/first-tutorial";
import SecondTutorial from "../tutorials/second-tutorial";
import globalStyles from "@/constants/globalStyes";

const HomePage = () => {
  return (
    <Container>
      <View style={globalStyles.container}>
        <FirstTutorial />
        <SecondTutorial />
      </View>
    </Container>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
