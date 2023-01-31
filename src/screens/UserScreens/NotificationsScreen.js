import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Button, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeScreen from "./CameraScreen";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Your Notifications</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const disconnect = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("token");
      setLoading(false);
      navigation.navigate("Auth");
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => disconnect()}
        labelStyle={{ fontSize: 20 }}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName="NotificationsScreen"
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        animationEnabled: false,
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: "orange",
        },
        drawerActiveTintColor: "orange",
        drawerInactiveTintColor: "orange",
        drawerStyle: {
          paddingTop: 50,
          backgroundColor: "#gray",
          width: 240,
        },
        drawerLabelStyle: {
          fontSize: 20,
        },
      }}
    >
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
