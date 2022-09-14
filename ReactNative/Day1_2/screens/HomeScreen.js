import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import TodoItem from "../components/TodoItem";

function HomeScreen(props) {
  const [todoList, setTodoList] = useState([
    { id: Math.random(), name: "shopping", currentState: "Not Completed" },
  ]);

  const [itemName, setItemName] = useState("");

  const todoItemDeleteHandler = (itemId) => {
    const newList = todoList.filter(item=>item.id !==itemId)
    setTodoList(newList)
  };

  const addTodoItemHandler = () => {
    setTodoList((previousTodoList) => [
      ...previousTodoList,
      { id: Math.random(), name: itemName, currentState: "Not Completed" },
    ]);
    setItemName("")
  };

  const itemNameHandler = (text) => {
    setItemName(text);
  };

  const renderItem = ({ item }) => {
    return <TodoItem item={item} todoItemDeleteHandler={todoItemDeleteHandler} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Hello ♥</Text>
      <Text style={styles.label}>Please Enter your Todo</Text>
      <TextInput
        keyboardType="default"
        style={styles.input}
        value={itemName}
        onChangeText={(text)=>itemNameHandler(text)}
      />
      <Button title="Add" onPress={addTodoItemHandler} />
      {todoList.length > 0 ? (
        <FlatList
          ListHeaderComponent={<ScrollView style={styles.listContainer} />}
          data={todoList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          initialNumToRender={25}
        />
      ) : (
        <Text>Your Todo is Empty,Try to add some..</Text>
      )}
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
  listContainer: {
    backgroundColor: "#f6ab6c",
  },
});

export default HomeScreen;
