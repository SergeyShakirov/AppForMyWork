import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import Style from "../fromGitHub/Styles";
import { StyleSheet } from "react-native";
import Colors from "../fromGitHub/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, title, paragraph, route }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("ThisCard", { title, paragraph })}
  >
    <Card.Content style={styles.mainCardView}>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
    </Card.Content>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  mainCardView: {
    height: 70,
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
});
