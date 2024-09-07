import Btn from "@/components/Btn";
import { Tabs } from "expo-router";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "../_layout";

const TabLayout = () => {
  const theme = useContext(ThemeProvider);

  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: theme?.theme === "light" ? "white" : "black",
          },
          headerTitleStyle: {
            color: theme?.theme === "dark" ? "white" : "black",
          },
          headerRight() {
            return (
              <Btn
                style={{ width: 70 }}
                text={theme?.theme || ""}
                onPress={() => {
                  theme?.setTheme(theme.theme === "dark" ? "light" : "dark");
                }}
                onLayout={(a) => {}}
              />
            );
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
          }}
        />
        <Tabs.Screen
          name="flat-list"
          options={{
            title: "Animated Flat List",
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
