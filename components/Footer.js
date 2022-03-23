import React from "react";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "./CustomProps/CustomButton";
import CustomInput from "./CustomProps/CustomInput";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.footer}>
      <Text>ghjkhkjdg</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "silver",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 100,
    paddingHorizontal: 30,
    marginBottom: 50,
  },
});
