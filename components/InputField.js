import { View, Text, TextInput, StyleSheet } from "react-native";

const InputField = (props) => {
  const validate = (e) => {
    props.setData((data) => {
      r = { ...data };
      r[props.label] = e;
      r[props.label + "valid"] = !(e.trim() == "" && props.label != "alias");
      r.buttonvalid = r.password.trim() != "" && r.username.trim() != "";
      r["similarerror"] = false;
      return r;
    });
  };
  return (
    <View style={{ marginBottom: 14 }}>
      <Text style={[styles.colorWhite]}>
        {props.label}
        {props.req ? "*" : ""}
      </Text>
      <TextInput
        style={[
          styles.inputstyle,
          styles.colorWhite,
          {
            borderBottomColor:
              !props.data[props.label + "valid"] ||
              (props.label === "username" && props.data["similarerror"])
                ? "#ff5959"
                : "white",
          },
        ]}
        onChangeText={validate}
        value={props.data[props.label]}
      />
      {props.data[props.label + "valid"] ? null : (
        <Text style={{ color: "#ff5959" }}>
          {props.label} should not be empty
        </Text>
      )}
      {props["label"] === "username" && props.data["similarerror"] ? (
        <Text style={{ color: "#ff5959" }}>duplicate username found</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputstyle: {
    borderBottomColor: "white",
    borderWidth: 1,
    borderColor: "transparent",
    marginBottom: 10,
    padding: 6,
  },
  colorWhite: {
    color: "#ddd",
  },
});

export default InputField;
