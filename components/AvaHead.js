import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar, Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../fromGitHub/Colors";
import { useNavigation } from "@react-navigation/native";

export default ({ scene }) => {
  const navigation = useNavigation();
  const back = scene.canGoBack;
  return back ? (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Text>Отмена</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}
    >
      <Avatar.Image
        size={40}
        source={{
          uri: "https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg",
        }}
      />
    </TouchableOpacity>
  );
};
