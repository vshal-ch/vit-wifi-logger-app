import { View, Text, StyleSheet, Pressable } from "react-native";

function ListItem({ username, content, selected, update }) {
  const helper = (e) => {
    update(username);
  };
  return (
    <Pressable
      style={[styles.container, selected ? styles.containerSelected : {}]}
      onPress={helper}
      android_ripple={{ color: "#333" }}
    >
      <View style={styles.checkBoxContianerParent}>
        <View style={styles.checkBoxContianer}>
          <View style={styles.checkbox}>
            {selected && <View style={styles.innerCircle}></View>}
          </View>
        </View>
        <Text style={styles.text}>{content}</Text>
      </View>
      <Pressable style={styles.menu}>
        <View style={styles.smallCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={[styles.smallCircle, styles.mb]}></View>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4f4f4f",
    paddingVertical: 14,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    borderRadius: 5,
    marginBottom: 10,
  },
  containerSelected: {
    backgroundColor: "#757575",
  },
  checkBoxContianerParent: {
    padding: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  checkBoxContianer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkbox: {
    width: 14,
    height: 14,
    borderWidth: 1.5,
    borderRadius: 7,
    borderColor: "#bababa",
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    width: 7,
    height: 7,
    backgroundColor: "#bababa",
    borderRadius: 3.5,
  },
  smallCircle: {
    width: 4,
    height: 4,
    backgroundColor: "#d3d3d3",
    borderRadius: 2,
    marginBottom: 3,
  },
  mb: {
    marginBottom: 0,
  },
  text: {
    color: "#ddd",
    fontSize: 18,
    textAlignVertical: "center",
  },
  menu: {},
});

export default ListItem;
