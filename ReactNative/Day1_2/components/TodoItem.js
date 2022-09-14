import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function TodoItem({ item, todoItemDeleteHandler }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{item.name}</Text>
      <Text style={styles.status}>{item.currentState}</Text>
      <Button title="Delete" onPress={()=>todoItemDeleteHandler(item.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f6efa6",
    width: 350,
    height: 50,
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  status: {
    color: "red",
    marginVertical: 10,
  },
});

export default TodoItem;
