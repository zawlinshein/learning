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

const HomePage = () => {
  return (
    <Container>
      <View style={{ gap: 24 }}>
        <FirstTutorial />
        <SecondTutorial />
        {/* <ThirdTutorial /> */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: "row" }}>
            <Text>Lesson 3 </Text>
            <Text style={{ color: "red" }}>
              ( react-native-svg is causing error )
            </Text>
          </View>
          <Text>- animated props ( with react native svg )</Text>
        </View>
      </View>
      <FourthTutorial width={320} />
    </Container>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
