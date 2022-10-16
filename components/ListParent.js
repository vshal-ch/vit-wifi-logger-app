import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import List from "./List";
import AddCredCTA from "./AddCredCTA";
import { ListContext } from "./ListContext";

export function ListParent() {
  const [credList, setCredList] = useState([
    {
      username: "19BCI0086",
      password:"asdf",
      key: "19BCI0086",
      alias: "19BCI0086",
      selected: true,
    },
  ]);
  return (
    <ListContext.Provider value={{ setCredList }}>
      <View style={styles.container}>
        <View
          style={[
            styles.listParent,
            credList.length ? null : styles.containerEmpty,
          ]}
        >
          {credList.length > 0 ? (
            <List data={credList} updateList={setCredList} />
          ) : (
            <Text style={{ color: "white", fontSize: 16 }}>
              Add a new credential below
            </Text>
          )}
        </View>
        <AddCredCTA list={credList} addItem={setCredList} />
      </View>
    </ListContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerEmpty: {
    alignItems: "center",
    justifyContent: "center",
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
