import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import FloatingMenu from "./FloatingMenu";

function ListItem({ username, content, selected, update, openUpdateModal }) {
  const [menuOpen, setMenuState] = useState(false);
  const helper = (e) => {
    update((list) => {
      list = [...list];
      for (let i of list) {
        if (i["username"] === username) {
          i["selected"] = true;
        } else {
          i["selected"] = false;
        }
      }
      return list;
    });
  };
  return (
    <Pressable
      style={[styles.container, selected ? styles.containerSelected : {}]}
      onPress={helper}
      android_ripple={{ color: "#d8d8d8" }}
    >
      <View style={styles.checkBoxContianerParent}>
        <View style={styles.checkBoxContianer}>
          <View
            style={[styles.checkbox, selected ? styles.checkboxSelected : {}]}
          >
            {selected && (
              <View
                style={[
                  styles.innerCircle,
                  selected ? styles.innerCircleSelected : {},
                ]}
              ></View>
            )}
          </View>
        </View>
        <Text style={styles.text}>{content}</Text>
      </View>
      <Pressable style={styles.menu} onPress={() => setMenuState(true)}>
        <View style={styles.smallCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={[styles.smallCircle, styles.mb]}></View>
      </Pressable>
      <FloatingMenu
        open={menuOpen}
        setOpen={setMenuState}
        updateModal={openUpdateModal}
        username={username}
      />
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
    overflow: "visible",
  },
  containerSelected: {
    backgroundColor: "#999999",
  },
  checkboxSelected: {
    borderColor: "#ddd",
  },
  innerCircleSelected: {
    backgroundColor: "#ddd",
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
  menu: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});

export default ListItem;
