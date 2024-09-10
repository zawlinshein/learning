import MyTabs from "@/components/MyTabs";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      tabBar={(a) => {
        return <MyTabs {...a} />;
      }}
    >
      <Tabs.Screen name="index" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default TabLayout;
