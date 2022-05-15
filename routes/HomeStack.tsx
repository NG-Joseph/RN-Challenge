import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/Login";

export const SCREENS = {
  HOME: Home,
  LOGINS: Login,
};
const HomeStack = createStackNavigator();

const HomeStackNavigator = (navigation: any) => {

  return (
      <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={SCREENS.HOME} />
      <HomeStack.Screen name="Logins" component={SCREENS.LOGINS} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
