import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CameraScreen from "../../screens/UserScreens/CameraScreen";
import NotificationScreen from "../../screens/UserScreens/NotificationsScreen";
const Tab = createMaterialTopTabNavigator();

const User = () => {
  return (
    <Tab.Navigator initialRouteName="CameraScreen" tabBar={() => null}>
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="CameraScreen" component={CameraScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default User;
