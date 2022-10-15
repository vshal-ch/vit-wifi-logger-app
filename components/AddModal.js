import { Modal, Text, View, StyleSheet } from "react-native";
import Form from "./Form";

const AddModal = ({ visible, setVisible }) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent={false}
      style={styles.modal}
      animationType={"slide"}
    >
      <View style={styles.container}>
        <View style={{ marginBottom: 24 }}>
          <Text style={[styles.mainTitle, styles.colorWhite]}>add</Text>
          <Text style={[styles.mainTitle, styles.colorWhite]}>credentials</Text>
        </View>
        <Form setVisible={setVisible} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#444",
  },
  colorWhite: {
    color: "#ddd",
  },
  mainTitle: {
    fontSize: 24,
  },
});

export default AddModal;
