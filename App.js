import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Title from "./components/Title";
import { ListParent } from "./components/List/ListParent";
import ActionButtons from "./components/ActionButtons";
import { StatusBar } from "react-native";
import { ListContext } from "./components/ListContext";

//to implement
//release 1
//custom toast for ios
//asyncstorage
//relase 2
//usage stats when logged out
//design changes
//release 3
//login widget

export default function App() {
  const [credList, setCredList] = useState([
    {
      username: "19BCI0086",
      password: "asdf",
      key: "19BCI0086",
      alias: "19BCI0086",
      selected: true,
    },
  ]);
  return (
    <ListContext.Provider value={{ credList, setCredList }}>
      <View style={styles.mainContainer}>
        <StatusBar barStyle={"light-content"} backgroundColor={"#343434"} />
        <View style={styles.upperHalf}>
          <Title />
          <ListParent />
        </View>
        <View style={styles.lowerHalf}>
          <ActionButtons />
        </View>
      </View>
    </ListContext.Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#343434",
    padding: 32,
    paddingTop: 0,
  },
  upperHalf: {
    paddingBottom: 16,
    flex: 1.5,
  },
  lowerHalf: {
    flex: 1,
  },
});
