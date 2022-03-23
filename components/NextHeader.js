import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar, Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../fromGitHub/Colors";

export default ({ scene, previous, navigation }) => {
  return (
    <Appbar.Header
      style={{ backgroundColor: "transparent", position: "absolute" }}
    >
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CreateTask");
        }}
      >
        <Appbar.Content
          title={<MaterialCommunityIcons name="plus" size={40} />}
        />
      </TouchableOpacity>
    </Appbar.Header>
  );
};
