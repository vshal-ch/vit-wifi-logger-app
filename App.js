import { StyleSheet, View } from "react-native";
import Title from "./components/Title";
import ListParent from "./components/ListParent";
import ActionButtons from "./components/ActionButtons";
import { StatusBar } from "react-native";

export default function App() {
  return (
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
