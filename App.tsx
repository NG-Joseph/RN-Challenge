import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeStackNavigator from './routes/HomeStack';


export default function App() {
  const AppStack = createNativeStackNavigator()
  const AppStackNavigator = () =>{
    return (
      <AppStack.Navigator initialRouteName={"Home"}>
      <AppStack.Screen options={{headerShown: false}} name={"Home"} component={HomeStackNavigator}/>
      </AppStack.Navigator>
    )
  }
  return (
    
    <NavigationContainer>
      <AppStackNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
