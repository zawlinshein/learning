import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Btn from "@/components/Btn";

const SettingPage = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{}}>
      <Text style={{ color: "black" }}>{count}</Text>
      <Btn
        text="count "
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
};

export default SettingPage;

const styles = StyleSheet.create({});
