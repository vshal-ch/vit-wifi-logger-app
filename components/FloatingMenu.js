import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const FloatingMenu = ({ open, setOpen, updateModal, username }) => {
  const handleClick = () => {
    updateModal(username);
    setOpen(false);
  };
  return (
    <Pressable
      style={[styles.abs, open ? null : styles.none]}
      onPress={() => setOpen(false)}
    >
      <View style={styles.menu}>
        <Pressable style={styles.action} onPress={handleClick}>
          <Text style={[styles.colorText]}>Update</Text>
        </Pressable>
        <Pressable style={styles.action}>
          <Text style={[styles.colorText]}>Delete</Text>
        </Pressable>
        <Pressable
          style={[styles.action, styles.crossBlock]}
          onPress={() => setOpen(false)}
        >
          <Text style={[styles.colorText, styles.cross]}>x</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  none: {
    display: "none",
  },
  abs: {
    position: "absolute",
    backgroundColor: "#0006",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexGrow: 1,
    borderRadius: 5,
    padding: 5,
    alignItems: "flex-end",
    paddingRight: 15,
  },
  menu: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: "100%",
    borderRadius: 5,
  },
  action: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  colorText: {
    color: "#333",
  },
  cross: {
    fontSize: 24,
    position: "absolute",
    top: "40%",
  },
  crossBlock: {
    position: "relative",
    padding: 20,
  },
});

export default FloatingMenu;
