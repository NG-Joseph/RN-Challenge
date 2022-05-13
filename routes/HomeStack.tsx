import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/Signup";

export const SCREENS = {
  HOME: Home,
  LOGINS: Login,
};
const HomeStack = createStackNavigator();

const HomeStackNavigator = (navigation: any) => {

  return (
      <HomeStack.Navigator
      screenOptions= {{
        headerStyle: {
          backgroundColor: '#2c2c2c',
          color: '#fff'
        },
        headerTitleStyle: {
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold'
        },
        title: 'Todo App',
      }}
      >
      <HomeStack.Screen name="Home" component={SCREENS.HOME} />
      <HomeStack.Screen name="Logins" component={SCREENS.LOGINS} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
