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
import ThirdTutorial from "../tutorials/third-tutorial";
import FourthTutorial from "../tutorials/fourth-tutorial";
import FifthTutorial from "../tutorials/fifth-tutorial";

const HomePage = () => {
  return (
    <Container>
      <View style={{ gap: 24 }}>
        <FirstTutorial />
        <SecondTutorial />
        <ThirdTutorial />
        <FourthTutorial />
        <FifthTutorial />
      </View>
    </Container>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
