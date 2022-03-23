import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

export default function DetailTask({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{console.log(navigation.getParent)}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
