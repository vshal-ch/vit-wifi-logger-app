import { FlatList } from "react-native";
import ListItem from "./ListItem";
import FloatingMenu from "./FloatingMenu";

export default function List(props) {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        key={item.key}
        username={item.key}
        content={item.alias}
        selected={item.selected}
        update={props.updateList}
      />
    );
  };
  return <FlatList data={props.data} renderItem={renderItem} />;
}
