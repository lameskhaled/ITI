import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome to my App</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput keyboardType="default" style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput

        keyboardType="default"
        style={styles.input}
      />
      <Button title="Login" color={"#c768ff"} />

      <Text style={styles.registerText}>
        Don't have account? click{" "}
        <Text
          style={styles.registerScreen}
          onPress={() => navigation.navigate("Register")}
        >
          Here
        </Text>{" "}
        to register
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    color: "#c768ff",
    marginBottom:30
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

export default LoginScreen;
