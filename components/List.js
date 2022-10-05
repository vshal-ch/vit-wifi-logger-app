import { FlatList } from "react-native";
import ListItem from "./ListItem";

export default function List(props) {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        key={item.key}
        username={item.key}
        content={item.username}
        selected={item.selected}
        update={props.updateList}
      />
    );
  };
  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
    />
  );
}
