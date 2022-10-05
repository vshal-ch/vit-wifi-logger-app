import { View, Text, StyleSheet } from "react-native";

function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Wifi</Text>
      <Text style={styles.title}>Logger</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "flex-start",
    paddingVertical: 16,
  },
  title: {
    fontSize: 32,
    marginVertical: 0,
    color: "#fff",
  },
});

export default Title;