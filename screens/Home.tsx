import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header"
import Form from "../components/Form"
import { useNavigation } from '@react-navigation/native';


type Props = {
    navigation?: any
}
 const Home: React.FC = () => {
   const navigation = useNavigation()
    const pressHandler = () => {
        //@ts-ignore
        navigation.navigate("Logins" );
    }
    return (
        <View style={styles.container}>
      {/* <View style={styles.nav}>
      <Header />
      </View> */}
      <View style={styles.form}>
        <Form />
      </View>
      <View style={styles.container}>
            <Text>Don't have an account? <Text onPress={pressHandler}>Sign Up Here</Text>
            </Text>
        </View>
      <StatusBar style="auto" />
    </View>
    )
    }
    const styles = StyleSheet.create({
        nav: {
          height: 50
        },
        container: {
          backgroundColor: '#fff',
        },
        form: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }
      });

export default Home;