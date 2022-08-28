import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import SignUp from "./SignUp";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator
    screenOptions={{
      headerMode: "true",
    }}
  >
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="SignUp" component={SignUp} />
  </RootStack.Navigator>
);

export default RootStackScreen;
