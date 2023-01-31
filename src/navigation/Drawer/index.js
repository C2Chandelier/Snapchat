import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/UserScreens/HomeScreen";
import Logout from "../../screens/UserScreens/Logout";
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default Drawer;
