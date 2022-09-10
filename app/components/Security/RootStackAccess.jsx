import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContect } from "./DrawerContent";
import InternetConnectionAlert from "react-native-internet-connection-alert";
import FlashMessage from "react-native-flash-message";
import Main from "../Screens/Main";

const RootStack = createDrawerNavigator();

const RootStackAccess = ({ navigation }) => (
  <InternetConnectionAlert
    onChange={(connectionState) => {
      // /
    }}
    title={"No Internet Connection"}
    type={"warn"}
    message={"Syncing functionality will be disable while offline"}
    interval={2000}
  >
    <FlashMessage position="top" />
    <RootStack.Navigator
      drawerContent={(props) => <DrawerContect {...props} />}
      screenOptions={{
        drawerPosition: "left",
        headerStyle: {
          backgroundColor: "#003153",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* <RootStack.Screen name="MainTab" component={MainTab} options={(navigation)=>({ title:'Daily Oil Production'} )} />*/}
      <RootStack.Screen
        name="Main"
        component={Main}
        options={(navigation) => ({
          title: "My Places",
          //   headerLeft: () => MainFunctions.ToolbarIconsReturnLeft(navigation),
        })}
      />
    </RootStack.Navigator>
  </InternetConnectionAlert>
);
export default RootStackAccess;
