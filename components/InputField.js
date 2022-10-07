import { View, Text, TextInput, StyleSheet } from "react-native";

const InputField = (props) => {
  return (
    <View style={{marginBottom:14}}>
      <Text style={[styles.colorWhite]}>{props.label}</Text>
      <TextInput
        style={[styles.inputstyle, styles.colorWhite]}
        ref={props.inputref}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputstyle: {
    borderBottomColor: "white",
    borderWidth: 1,
    borderColor: "transparent",
  },
  colorWhite: {
    color: "#ddd",
  },
});

export default InputField;
