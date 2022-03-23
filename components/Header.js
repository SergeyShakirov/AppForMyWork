import { View, StyleSheet, Text, SafeAreaView, Button } from "react-native";

export default function Header({ navigation }) {
  const navigate = (route) => navigation.navigate(route);
  return (
    <View style={styles.container}>
      <Button onPress={() => navigate("Create")} title="add" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    paddingTop: 50,
  },
});
