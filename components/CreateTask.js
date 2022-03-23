import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "./CustomProps/CustomButton";
import CustomInput from "./CustomProps/CustomInput";
import { useHttp } from "../hooks/auth.hook";
import { setLogin, setPassword } from "../src/UserData/UserActions";
import { addTask } from "../src/AppData/AppActions";
import MyHeader from "../fromGitHub/MyHader";
import { useNavigation } from "@react-navigation/native";

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  const { token } = useSelector((state) => state.UserRedusers);

  const { request } = useHttp();
  const dispatch = useDispatch();

  const addTaskHandler = async () => {
    try {
      const data = await request("/api/task/addtask", "POST", {
        token,
        taskName,
        description,
      });

      if (data) {
        dispatch(addTask({ taskName, description }));
        navigation.navigate("HomeScreen");
      }
    } catch (error) {
      throw error.message;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomInput placeholder={"Название"} setValue={setTaskName} />
      <CustomInput placeholder={"Описание"} setValue={setDescription} />
      <CustomButton title={"Добавить"} onPress={addTaskHandler} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    alignItems: "center",
    padding: 20,
  },
});
