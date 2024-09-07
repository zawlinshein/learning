import Container from "@/components/Container";
import { Text } from "react-native";
import { useAnimatedStyle } from "react-native-reanimated";

const AnimatedText = () => {
  const animatedStyle = useAnimatedStyle(() => {
    if (global._WORKLET) {
      return { width: "100%" };
    } else {
      return { width: "100%" };
    }
  });

  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  );
};

export default AnimatedText;
