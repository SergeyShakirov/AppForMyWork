import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useSelector } from "react-redux";
import Header from "./Header";

export default function ItemList({ navigation }) {
  const items = useSelector((state) => state.AppRedusers);

  return (
    <View style={styles.container}>
      <Header
        navigateFunc={() => {
          navigation.navigate("Create");
        }}
      />
      {items.map((el) => (
        <View style={styles.list}>
          <TouchableOpacity onPress={() => navigation.navigate("Task")}>
            <Text>{el.taskName}</Text>
            <Text>{el.description}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { flex: 2, borderWidth: 1 },
  container: { flex: 1 },
});
