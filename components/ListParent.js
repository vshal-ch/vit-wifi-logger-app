import { useState } from "react";
import { View, StyleSheet } from "react-native";
import List from "./List";
import AddCredCTA from "./AddCredCTA";

export default function ListParent() {
  const [credList, setCredList] = useState([
    {
      username: "19BCI0086",
      password: "3V28QK",
      selected: true,
      key: "19BCI0086",
    },
    {
      username: "19BHM0004",
      password: "4455",
      selected: false,
      key: "19BHM0004",
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.listParent}>
        <List data={credList} updateList={setCredList} />
      </View>
      <AddCredCTA list={credList} addItem={setCredList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    marginVertical: 16,
  },
  listParent: {
    flexGrow: 1,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 10,
    backgroundColor: "#0c0c0c",
    overflow: "hidden",
  },
});
