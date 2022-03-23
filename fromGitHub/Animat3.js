import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon, { Icons } from "./Icons";
import Colors from "./Colors";
import ColorScreen from "./ColorScreen";
import * as Animatable from "react-native-animatable";
import MainScreen from "../components/MainScreen";
import SearchUsers from "../components/SearchUsers";
import AvaHead from "../components/AvaHead";
import HeaderLeft from "../components/HeaderLeft";

const TabArr = [
  {
    route: "Home",
    label: "Список",
    type: Icons.Feather,
    icon: "home",
    component: MainScreen,
    color: Colors.primary,
    alphaClr: Colors.primaryAlpha,
    title: "Мои задачи",
  },
  {
    route: "Search",
    label: "Поиск",
    type: Icons.Feather,
    icon: "search",
    component: SearchUsers,
    color: Colors.green,
    alphaClr: Colors.greenAlpha,
    title: "Исполнители",
  },
  // {
  //   route: "Add",
  //   label: "Добавить",
  //   type: Icons.Feather,
  //   icon: "plus-square",
  //   component: ColorScreen,
  //   color: Colors.red,
  //   alphaClr: Colors.redAlpha,
  // },
  {
    route: "Account",
    label: "Профиль",
    type: Icons.FontAwesome,
    icon: "user-circle-o",
    component: ColorScreen,
    color: Colors.purple,
    alphaClr: Colors.purpleAlpha,
    title: "Профиль",
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
      textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: item.color, borderRadius: 16 },
          ]}
        />
        <View
          style={[
            styles.btn,
            { backgroundColor: focused ? null : item.alphaClr },
          ]}
        >
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.white : Colors.primary}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: Colors.white,
                  paddingHorizontal: 1,
                }}
              >
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function AnimTab3() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              title: item.title,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
  },
});
