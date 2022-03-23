import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Styles from "../fromGitHub/Styles";
import Colors from "../fromGitHub/Colors";
import MyHeader from "../fromGitHub/MyHader";
import ContantCard from "./Cards";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CreateTask from "./CreateTask";
import Card from "./Card";
import AvaHead from "./AvaHead";
import HeaderLeft from "./HeaderLeft";

const HomeStack = createStackNavigator();

function ColorScreen({ route, navigation }) {
  const items = useSelector((state) => state.AppRedusers);

  const viewRef = React.useRef(null);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      viewRef.current.animate({ 0: { opacity: 0.5 }, 1: { opacity: 1 } });
    });
    return () => unsubscribe;
  }, [navigation]);

  return (
    <Animatable.View
      ref={viewRef}
      easing={"ease-in-out"}
      style={Styles.container}
    >
      <View style={{ backgroundColor: Colors.primary, flex: 1 }}>
        {items.map((el, index) => (
          <ContantCard
            key={index}
            navigation={navigation}
            title={el.taskName}
            paragraph={el.description}
          />
        ))}
      </View>
    </Animatable.View>
  );
}

export default function StackMainScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerLeft: (scene) => <AvaHead scene={scene} />,
        headerRight: (scene) => <HeaderLeft scene={scene} />,
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={ColorScreen}
        options={{ title: "Мои задачи" }}
      />
      <HomeStack.Screen
        name="CreateTask"
        component={CreateTask}
        options={{ title: "Создать задачу" }}
      />
      <HomeStack.Screen name="ThisCard" component={Card} />
      <HomeStack.Screen name="AvaHead" component={AvaHead} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({});
