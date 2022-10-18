import { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import List from "./List";
import AddCredCTA from "../Form/AddCredCTA";
import { ListContext } from "../ListContext";

export function ListParent() {
  const {credList,setCredList} = useContext(ListContext);
  return (
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
