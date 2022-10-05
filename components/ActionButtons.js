import React from "react";
import { View, Pressable, Image, Text, StyleSheet } from "react-native";

export default function ActionButtons() {
  return (
    <View style={{ flex: 1 }}>
      <Pressable style={styles.loginBtn}>
        <Image style={styles.img} source={require("../assets/logo.png")} />
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
      <Pressable style={styles.logoutBtn}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: "100%",
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 6,
    flexGrow: 1,
  },
  img: {
    width: 80,
    height: 102.86,
  },
  loginText: {
    color: "white",
    fontSize: 20,
    marginTop: 16,
  },
  logoutBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#929292",
    color: "black",
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
  },
});
