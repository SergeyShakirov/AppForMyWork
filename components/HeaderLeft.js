import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar, Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../fromGitHub/Colors";
import { useNavigation } from "@react-navigation/native";

export default (scene) => {
  const navigation = useNavigation();
  const back = scene.scene.canGoBack;
  return back ? (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CreateTask");
      }}
    >
      <Text>Создать</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CreateTask");
      }}
    >
      <Appbar.Content
        title={<MaterialCommunityIcons name="plus" size={40} color={"black"} />}
        style={{ marginTop: 7 }}
      />
    </TouchableOpacity>
  );
};
