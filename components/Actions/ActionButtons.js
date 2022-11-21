import { React, useContext } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { logout } from "./Logout";
import { login } from "./Login";
import { ListContext } from "../List/ListContext";
import { ToastContext } from "../Toast/ToastContext";

export default function ActionButtons() {
  const { credList } = useContext(ListContext);
  const { setToast } = useContext(ToastContext);
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          login(
            credList.filter((i) => i.selected),
            setToast
          );
        }}
      >
        <Image style={styles.img} source={require("../../assets/logo.png")} />
        <Text style={styles.loginText}>login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => logout(setToast)}
      >
        <Text>logout</Text>
      </TouchableOpacity>
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
