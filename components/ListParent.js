import { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import List from "./List";

export default function ListParent() {
  const [credList, setCredList] = useState([
    {
      username: "19BCI0086",
      password: "3V28QK",
      selected: false,
      key: "19BCI0086",
    },
    {
      username: "19BHM0004",
      password: "4455",
      selected: false,
      key: "19BHM0004",
    },
  ]);
  const updateList = (key) => {
    setCredList((list) => {
      list = [...list];
      for (let i of list) {
        if (i["key"] === key) {
          i["selected"] = true;
        } else {
          i["selected"] = false;
        }
      }
      return list;
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.listParent}>
        <List data={credList} updateList={updateList} />
      </View>
      <Pressable style={styles.plusButton}>
        <Text style={styles.plus}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
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
  plusButton: {
    width: "100%",
    backgroundColor: "#777",
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    borderRadius: 24,
  },
  plus: {
    fontSize: 30,
    color: "white",
    textAlignVertical: "center",
    textAlign: "center",
    paddingVertical: 0,
  },
});
