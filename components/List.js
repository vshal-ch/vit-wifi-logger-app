import { useState } from "react";
import { FlatList } from "react-native";
import AddModal from "./AddModal";
import ListItem from "./ListItem";

export default function List(props) {
  const [modalState, setModalState] = useState({
    open: false,
    data: null,
  });
  const openModal = (username) => {
    setModalState((s) => {
      s = {s}
      let data = props.data.find((e) => e.username == username);
      s.data = data;
      s.open = true;
      return s;
    });
  };

  const setModalVisible = (flag) => {
    setModalState((s) => {
      return { s, open: flag };
    });
  };
  const renderItem = ({ item }) => {
    return (
      <ListItem
        key={item.key}
        username={item.username}
        content={item.alias}
        selected={item.selected}
        update={props.updateList}
        openUpdateModal={openModal}
      />
    );
  };
  return (
    <>
      <FlatList data={props.data} renderItem={renderItem} />
      <AddModal
        visible={modalState.open}
        setVisible={setModalVisible}
        data={modalState.data}
      />
    </>
  );
}
