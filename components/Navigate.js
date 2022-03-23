import ItemList from "./ItemList";
import DetailTask from "./DetailTask";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Authorizations/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import CreateTask from "./CreateTask";
import Header from "./NextHeader";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AnimTab3 from "../fromGitHub/Animat3";
import Cards from "./Cards";
import Card from "./Card";
import { DrawerContent } from "./DrawerContent";
import AvaHead from "./AvaHead";
import HeaderLeft from "./HeaderLeft";

const Draw = createDrawerNavigator();

export default function Navigate() {
  const { token } = useSelector((state) => state.UserRedusers);

  return (
    <NavigationContainer>
      {token ? (
        <Draw.Navigator
          drawerContent={() => <DrawerContent />}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Draw.Screen name="Tab3" component={AnimTab3} />
          <Draw.Screen name="Cards" component={Cards} />
        </Draw.Navigator>
      ) : (
        <LoginScreen />
      )}
    </NavigationContainer>
  );
}
