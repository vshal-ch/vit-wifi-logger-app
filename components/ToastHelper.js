import { ToastAndroid, Platform } from "react-native";

export const showToast = (s) => {
  if (Platform.OS === "android") {
    ToastAndroid.show(s, ToastAndroid.SHORT);
  }
};
