import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Modal,
} from "react-native";

function Input(props) {
  const [text, setText] = useState("");
  function inputHandler(e) {
    setText(e);
  }
  function submitHandler(e) {
    if (!text.trim()) {
      return;
    }
    props.setTasks((tasks) => [...tasks, { text: text, key: text }]);
    setText("");
    props.closeModal();
  }
  return (
    <Modal visible={props.modalVisible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add text"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={text}
        />
        <View style={styles.buttonrow}>
          <Pressable style={styles.button} onPress={submitHandler}>
            <Text style={{ color: "white" }}>Add</Text>
          </Pressable>
          <Pressable style={styles.cancleButton} onPress={props.closeModal}>
            <Text style={{ color: "white" }}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 25,
  },
  textInput: {
    borderColor: "#aaa",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 15,
  },
  buttonrow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#33baf0",
    borderRadius: 3,
    width: 70,
    paddingVertical: 10,
  },
  cancleButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9b9b9b",
    borderRadius: 3,
    width: 70,
    paddingVertical: 10,
  },
});

export default Input;
