import React, { useEffect, useState } from "react";
import { SafeAreaView, useColorScheme, StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "./fromGitHub/Colors";
import { Provider as ProviderPaper } from "react-native-paper";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import CreateTask from "./components/CreateTask";
import LoginScreen from "./components/Authorizations/LoginScreen";
import Card from "./components/Card";
import Cards from "./components/Cards";
import Navigate from "./components/Navigate";

export default function App() {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: Colors.white,
  };

  return (
    <Provider store={store}>
      <ProviderPaper>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar />
          <Navigate />
        </SafeAreaView>
      </ProviderPaper>
    </Provider>
  );
}
