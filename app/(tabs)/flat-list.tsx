import Container from "@/components/Container";
import React, { FC, useCallback, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  ViewToken,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const List: FC<{
  viewableItems: SharedValue<ViewToken<{ id: number }>[]>;
  item: {
    id: number;
    offsetX: number;
  };
}> = ({ item, viewableItems }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const isVisible = !!viewableItems.value
      .filter((a) => a.isViewable)
      .find((a) => a.item.id === item.id);
    return {
      opacity: withTiming(isVisible ? 1 : 0, { duration: 1000 }),
      transform: [{ scale: withTiming(isVisible ? 1 : 0.6) }],
    };
  }, []);

  const offsetX = useSharedValue(0);

  const pan = Gesture.Pan().onChange((e) => {
    offsetX.value = withSpring(e.translationX);
  });

  const draggableAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value }],
    };
  }, []);

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[styles.list, animatedStyle, draggableAnimatedStyles]}
        onLayout={(e) => {
          offsetX.value = e.nativeEvent.layout.x;
        }}
      />
    </GestureDetector>
  );
};

const itemSeparatorComponent: FC = () => {
  return <View style={styles.separator} />;
};

const AnimatedFlatList = () => {
  const viewableItems = useSharedValue<
    ViewToken<{
      id: number;
    }>[]
  >([]);

  const [data, setData] = useState(
    new Array(50).fill(0).map((_, index) => ({ id: index, offsetX: 0 }))
  );

  const handleChange = useCallback((id: number, offsetX: number) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, offsetX };
        }
        return item;
      })
    );
  }, []);

  return (
    <Container noPadding>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {data.map((item) => {
          return <List item={item} viewableItems={viewableItems} />;
        })}
      </ScrollView>
      {/* <FlatList
        data={data}
        renderItem={({ item }) => {
          return <List item={item} viewableItems={viewableItems} />;
        }}
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={itemSeparatorComponent}
        onViewableItemsChanged={({ viewableItems: vItem }) => {
          viewableItems.value = vItem;
        }}
      /> */}
    </Container>
  );
};

export default AnimatedFlatList;

const styles = StyleSheet.create({
  list: {
    width: "100%",
    height: 70,
    backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 6,
  },
  contentContainerStyle: {
    padding: 16,
    gap: 12,
  },
  separator: {
    padding: 5,
  },
});
