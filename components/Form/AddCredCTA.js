import { Pressable, Text, StyleSheet } from "react-native";
import { useState } from "react";
import AddModal from "./AddModal";

const AddCredCTA = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable
        style={styles.plusButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.plus}>+</Text>
      </Pressable>
      <AddModal visible={modalVisible} setVisible={setModalVisible} />
    </>
  );
};

const styles = StyleSheet.create({
  plusButton: {
    width: "100%",
    backgroundColor: "#777",
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    borderRadius: 24,
  },
  plus: {
    fontSize: 30,
    color: "white",
    textAlignVertical: "center",
    textAlign: "center",
    paddingVertical: 0,
  },
});

export default AddCredCTA;
