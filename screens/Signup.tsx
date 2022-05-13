import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import Login from '../components/Login';
import { StatusBar } from 'expo-status-bar';


const Signup = () => {
    return (
        <View style={styles.container}>
      {/* <View style={styles.nav}>
      <Header />
      </View> */}
      <View style={styles.form}>
        <Login />
      </View>
      <StatusBar style={"auto"}/>
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

export default Signup;