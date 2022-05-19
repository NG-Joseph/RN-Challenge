import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Login: React.FC = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });
    const {name, password, email, password2} = user;
    return (
        <View>
        <View >
            <Text style={styles.intro}> Login To Your Todo App</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Enter Username</Text>
            <TextInput style={styles.input} placeholder="enter email" defaultValue={name} onChangeText={(val) => {setUser({...user,name: val})}} />
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Enter Email</Text>
            <TextInput style={styles.input} placeholder="enter email" defaultValue={email} onChangeText={(val) => {setUser({...user, email: val})}} />
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Enter Password</Text>
            <TextInput style={styles.input} placeholder="enter password" defaultValue={password} onChangeText={(val) => {setUser({...user,password: val})}} />
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput style={styles.input} placeholder="confirm password" defaultValue={password2} onChangeText={(val) => {setUser({...user, password2: val})}} />
        </View>
        <View >
            <Text style={styles.cen}>Don't have an account? Sign Up Here</Text>
        </View>
        <View style={styles.button}>
            <Button title="Login" color="#2c2c2c" />
                </View>
        </View>
    )
}

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
export default Login