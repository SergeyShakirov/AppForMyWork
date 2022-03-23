import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomProps/CustomButton";
import CustomInput from "../CustomProps/CustomInput";
import { useHttp } from "../../hooks/auth.hook";
import {
  setLogin,
  setPassword,
  setToken,
} from "../../src/UserData/UserActions";

export default function LoginScreen({ navigation }) {
  const [login, _setLogin] = useState("");
  const [password, _setPassword] = useState("");

  const dispatch = useDispatch();
  const { request } = useHttp();

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", {
        login,
        password,
      });

      if (data && data.token) {
        dispatch(setToken(data.token));
        console.log(navigation);
      }
    } catch (error) {
      throw error.message;
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", {
        login,
        password,
      });

      if (data && data.token) {
        dispatch(setToken(data.token));
        console.log(navigation);
      }
    } catch (error) {
      throw error.message;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput setValue={(e) => _setLogin(e)} placeholder="Введите логин" />
      <CustomInput
        setValue={(e) => _setPassword(e)}
        placeholder="Введите пароль"
        secureTextEntry={true}
      />
      <CustomButton title={"Войти"} onPress={loginHandler} />
      <CustomButton title={"Регистрация"} onPress={registerHandler} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
});
