import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput keyboardType="default" style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput keyboardType="default" style={styles.input} />
      <Text style={styles.label}>Retype Password</Text>
      <TextInput keyboardType="default" style={styles.input} />
      <Button
        title="Register"
        color={"#c768ff"}
        onPress={() => navigation.navigate("Home")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    color: "#c768ff",
    marginBottom: 30,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  input: {
    borderColor: "#ffaded",
    borderRadius: 15,
    borderWidth: 2,
    width: 250,
    marginVertical: 15,
    paddingVertical: 5,
  },
  registerText: {
    color: "blue",
    marginVertical: 10,
  },
  registerScreen: {
    color: "#7045ff",
  },
});

export default RegisterScreen;
