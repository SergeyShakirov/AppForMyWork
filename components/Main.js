import React from "react";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "./CustomProps/CustomButton";
import CustomInput from "./CustomProps/CustomInput";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
});
