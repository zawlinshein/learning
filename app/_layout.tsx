import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { createContext, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const ThemeProvider = createContext<{
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
} | null>(null);

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().catch((a) => {
        console.error(a);
        throw a;
      });
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider.Provider value={{ theme, setTheme }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider.Provider>
    </GestureHandlerRootView>
  );
}
