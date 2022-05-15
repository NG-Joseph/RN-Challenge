import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
    navigation?: any
}

const Form: React.FC<Props> = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState({
        name: "",
        password: ""
    });
    const {name, password} = user
    // navigation
    const pressHandler = () => {
        //@ts-ignore
        navigation.navigate("Logins");
    }
    return (
        <View>
        <View >
            <Text style={styles.intro}> Login To Your Todo App</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Enter Email</Text>
            <TextInput style={styles.input} placeholder="enter email" defaultValue={name} onChangeText={(val) => {setUser({...user,name: val}); console.log(val)}} />
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Enter Password</Text>
            <TextInput style={styles.input} placeholder="enter password" defaultValue={password} onChangeText={(val) => {setUser({...user,password: val}); console.log(val)}} />
        </View>
        <View>
            <Text style={styles.cen}>Don't have an account? <Text style={styles.cen} onPress={pressHandler}>Sign Up Here</Text>
            </Text>
        </View>
        <View style={styles.button}>
            <Button onPress={pressHandler} title="Login" color="#2c2c2c" />
                </View>
        </View>
    )

};

const styles = StyleSheet.create({
    intro: {
        marginTop: 20,
        fontSize: 32,
        textAlign: "center",
    },
    label: {
        padding: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: '90%'
    },
    form: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start"
      },
    cen: {
        textAlign: "center"
    },
    button: {
        marginTop: 10,
        // width: '90%',
        padding: 10,
        textAlign: "center"
    }
})


export default Form;


