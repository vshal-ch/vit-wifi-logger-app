import { View, Text, StyleSheet, Pressable } from "react-native";
import InputField from "./InputField";
import { useState, useContext } from "react";
import { ListContext } from "../List/ListContext";

const Form = ({ setVisible, formdata }) => {
  const { setCredList } = useContext(ListContext);
  const [data, setData] = useState({
    username: formdata ? formdata.username : "",
    password: formdata ? formdata.password : "",
    alias: formdata ? formdata.alias : "",
    usernamevalid: true,
    passwordvalid: true,
    aliasvalid: true,
    buttonvalid: formdata ? true : false,
    similarerror: false,
  });

  const addCreds = () => {
    if (!data.buttonvalid) {
      return;
    }
    setCredList((list) => {
      if (formdata) {
        let usernameChanged = true;
        if (data.username === formdata.username) {
          usernameChanged = false;
        }
        list = [...list];
        if (usernameChanged && list.some((i) => i.username === data.username)) {
          setData((e) => {
            return { ...e, similarerror: true };
          });
          return list;
        }
        let i = list.findIndex((e) => e.username === formdata.username);
        list[i]["username"] = data.username;
        list[i]["password"] = data.password;
        list[i]["alias"] =
          data.alias.trim() === "" ? data.username : data.alias;
        list[i]["key"] = data.username;
        setVisible(false);
        return list;
      }
      //adding credential
      let flag = list.some((item) => item.username == data.username);
      if (flag) {
        setData((e) => {
          return { ...e, similarerror: true };
        });
        return list;
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
      setVisible(false);
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
          onPress={() => setVisible(false)}
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
          <Text style={{ color: "#444" }}>{formdata ? "update" : "add"}</Text>
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
