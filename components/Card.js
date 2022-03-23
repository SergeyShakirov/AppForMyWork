import * as React from "react";
import { Text, View } from "react-native";
import Styles from "../fromGitHub/Styles";
import MyHeader from "../fromGitHub/MyHader";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ route }) => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerLeft: () => (
      <MaterialCommunityIcons name="chevron-left" size={40} color={"black"} />
    ),
  });
  return (
    <View style={Styles.container}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.paragraph}</Text>
    </View>
  );
};
