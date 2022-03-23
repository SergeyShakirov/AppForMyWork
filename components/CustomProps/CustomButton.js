import React from "react";
import { Button, StyleSheet, View, Text, Pressable } from "react-native";

export default function CustomButton({ title, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E90FF",
    marginVertical: 5,
    width: "100%",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
