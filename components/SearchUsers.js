import React, { useEffect, useState, useMemo } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Text,
  Button,
} from "react-native";
import { useHttp } from "../hooks/auth.hook";
import MyHeader from "../fromGitHub/MyHader";
import Styles from "../fromGitHub/Styles";
import * as Animatable from "react-native-animatable";
import Colors from "../fromGitHub/Colors";
import ContantCard from "./Cards";

export default function SearchUsers({ route, navigation }) {
  const [items, setItems] = useState([]);
  const viewRef = React.useRef(null);

  const { request } = useHttp();

  useEffect(async () => {
    try {
      const data = await request("/api/user/getusers");

      if (data) {
        setItems(data);
      }
    } catch (error) {
      console.log(error);
    }

    const unsubscribe = navigation.addListener("focus", () => {
      viewRef.current.animate({ 0: { opacity: 0.5 }, 1: { opacity: 1 } });
    });
    return () => unsubscribe;
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <Animatable.View
        ref={viewRef}
        easing={"ease-in-out"}
        style={Styles.container}
      >
        <View style={{ backgroundColor: Colors.green, flex: 1 }}>
          {items.map((el, index) => (
            <ContantCard
              key={index}
              navigation={navigation}
              title={el.login}
              paragraph={""}
            />
          ))}
        </View>
      </Animatable.View>
    </View>
  );
}
const styles = StyleSheet.create({});
