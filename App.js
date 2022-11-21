import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { React, useState } from "react";
import Title from "./components/Title";
import { ListParent } from "./components/List/ListParent";
import ActionButtons from "./components/Actions/ActionButtons";
import { ListContext } from "./components/List/ListContext";
import CustomToast from "./components/Toast/CustomToast";
import { ToastContext } from "./components/Toast/ToastContext";
import useAsyncStorage from "./components/useAsyncStorage";

//to implement
//release 1
//custom toast for ios done
//asyncstorage
//relase 2
//animations
//usage stats when logged out
//design changes
//release 3
//login widget

export default function App() {
  const [credList, setCredList] = useAsyncStorage("creds", []);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    count: 0,
  });
  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.mainContainer}>
        <ToastContext.Provider value={{ toast, setToast }}>
          <StatusBar barStyle={"light-content"} backgroundColor={"#343434"} />
          <ListContext.Provider value={{ credList, setCredList }}>
            <View style={styles.upperHalf}>
              <Title />
              <ListParent />
            </View>
            <View style={styles.lowerHalf}>
              <ActionButtons />
            </View>
          </ListContext.Provider>
          <CustomToast />
        </ToastContext.Provider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaView: { flex: 1, backgroundColor: "#343434" },
  mainContainer: {
    flex: 1,
    backgroundColor: "#343434",
    padding: 32,
    paddingTop: 0,
    position: "relative",
  },
  upperHalf: {
    paddingBottom: 16,
    flex: 1.5,
  },
  lowerHalf: {
    flex: 1,
  },
});
