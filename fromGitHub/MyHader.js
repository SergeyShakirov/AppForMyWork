import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Surface, Title } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";

export default function AppHeader({ title, navigation, icon, onPressLeft }) {
  return (
    <Surface style={[styles.header, { backgroundColor: "white" }]}>
      <View style={styles.view}>
        <TouchableOpacity onPress={onPressLeft}>
          <Feather name={icon} size={24} color={"black"} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleView}>
        <Title style={{ color: "black" }}>{title}</Title>
      </View>
      <View style={[styles.view, styles.rightView]}>
        <TouchableOpacity onPress={() => navigation.navigate("CreateTask")}>
          <Feather name={"plus"} size={24} color={"black"} />
        </TouchableOpacity>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 4,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  view: {
    marginHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  titleView: {
    flex: 1,
  },
  rightView: {
    justifyContent: "flex-end",
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});
