import { View, Text, StyleSheet } from "react-native";
import { ToastContext } from "./ToastContext";
import { React, useContext } from "react";

const CustomToast = () => {
  const { toast } = useContext(ToastContext);
  return (
    <View
      style={[styles.toast, toast.visible ? styles.visible : null]}
      pointerEvents={"none"}
    >
      <Text style={{ color: "white" }}>{toast.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    display: "none",
    position: "absolute",
    top: 30,
    backgroundColor: "#7775",
    alignSelf: "center",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  visible: {
    display: "flex",
  },
});

export default CustomToast;
