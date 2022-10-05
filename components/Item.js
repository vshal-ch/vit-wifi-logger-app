import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Item(props) {
  function callDelete() {
    props.todel(props.title);
  }
  return (
    <View style={styles.item}>
      <Text>{props.title}</Text>
      <Button title="del" onPress={callDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
});

export default Item;
