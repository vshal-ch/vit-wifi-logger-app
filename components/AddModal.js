import { Modal, Text, View, StyleSheet, Pressable } from "react-native";
import InputField from "./InputField";
import { useRef } from "react";

const AddModal = ({ visible, setVisible }) => {
  const usernameref = useRef();
  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent={true}
      style={styles.modal}
      animationType={"slide"}
    >
      <View style={styles.container}>
        <View style={{ marginBottom: 24 }}>
          <Text style={[styles.mainTitle, styles.colorWhite]}>add</Text>
          <Text style={[styles.mainTitle, styles.colorWhite]}>credentials</Text>
        </View>
        <InputField
          label={"username*"}
          inputref={usernameref}
          required={true}
        />
        <InputField
          label={"password*"}
          inputref={usernameref}
          required={true}
        />
        <InputField label={"alias"} inputref={usernameref} required={false} />
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, { backgroundColor: "#333" }]}>
            <Text style={{ color: "#c2c2c2" }}>cancel</Text>
          </Pressable>
          <Pressable style={[styles.button, { backgroundColor: "#c3c3c3" }]}>
            <Text style={{ color: "#555555" }}>add</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  container: {
    flex: 1,
    padding: 16,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    backgroundColor: "#444",
  },
  colorWhite: {
    color: "#ddd",
  },
  mainTitle: {
    fontSize: 24,
  },
  button: {
    padding: 8,
    borderRadius: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent:"space-evenly"
  },
});

export default AddModal;
