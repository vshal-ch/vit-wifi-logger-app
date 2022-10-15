import { View, Text, StyleSheet, Pressable } from "react-native";
import InputField from "./InputField";
import { useState, useContext } from "react";
import { ListContext } from "./ListContext";

const Form = (props) => {
  const { setCredList } = useContext(ListContext);
  const [data, setData] = useState({
    username: "",
    password: "",
    alias: "",
    usernamevalid: true,
    passwordvalid: true,
    aliasvalid: true,
    buttonvalid: false,
  });

  const addCreds = () => {
    if (!data.buttonvalid) {
      return;
    }
    setCredList((list) => {
      let flag = list.some((item) => item.key == data.username);
      if (flag) {
        return;
      }
      list = [...list];
      let selected = list.length == 0 ? true : false;
      let newobj = {
        username: data.username,
        password: data.password,
        alias: data.alias.trim() === "" ? data.username : data.alias,
        key: data.username,
        selected,
      };
      list.push(newobj);
      props.setVisible(false);
      return list;
    });
  };

  return (
    <>
      <InputField label={"username"} req={true} data={data} setData={setData} />
      <InputField label={"password"} req={true} data={data} setData={setData} />
      <InputField label={"alias"} req={false} data={data} setData={setData} />
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: "#333" }]}
          onPress={() => props.setVisible(false)}
        >
          <Text style={{ color: "#cdcdcd" }}>cancel</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            {
              backgroundColor: data.buttonvalid
                ? "hsl(0, 0%, 86%)"
                : "hsl(0, 0%, 66%)",
            },
          ]}
          onPress={addCreds}
        >
          <Text style={{ color: "#444" }}>add</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    width: 80,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
});

export default Form;
