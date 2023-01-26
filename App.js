import React, { useEffect } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { AuthContext } from "./app/components/Security/context";
import RootStackSreen from "./app/components/Security/RootStackScreen";
import RootStackAccess from "./app/components/Security/RootStackAccess";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  ActivityIndicator,
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as SQLite from "expo-sqlite";
//import * as MainFunctions from "./app/components/Share";
import { useNetInfo } from "@react-native-community/netinfo";
import Main from "./app/components/Screens/Main";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//const db = SQLite.openDatabase("db.db");

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const netInfo = useNetInfo();

  let initialLoginState = {
    isLoading: true,
    email: null,
    userToken: "temp",
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      // let record = foundUser[0];
      const userToken = "temp";
      const userEmail = "test@gmail.com";
      const userID = "1";
      const userName = "Nate";
      let items = [
        ["userToken", userToken],
        ["userEmail", userEmail],
        ["userID", userID],
        ["userName", userName],
      ];
      // if (userEmail == "AvatarTest@avatarcloud.net") {
      //   // MainFunctions.CreateTempTableForDemo();
      //   // AsyncStorage.multiSet(items, () => {});
      // } else {
      try {
        AsyncStorage.multiSet(items, () => {});
      } catch (e) {
        console.log(e);
      }
      // }
      dispatch({ type: "LOGIN", id: userEmail, token: userToken });
    },
    singOut: async () => {
      let items = [
        "userToken",
        "userEmail",
        "userID",
        "companyID",
        "userName",
        "databaseID",
      ];
      try {
        await AsyncStorage.multiRemove(items);
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "LOGOUT" });
    },
    singUp: async (foundUser) => {
      // let record = foundUser[0];
      // const userToken = record.UserToken;
      // const userEmail = record.Email;
      // const userID = record.UserID.toString();
      // const companyID = record.CompanyID.toString();
      // const userName = record.Name;
      // const databaseID = record.DatabaseID.toString();
      // let items = [
      //   ["userToken", userToken],
      //   ["userEmail", userEmail],
      //   ["userID", userID],
      //   ["companyID", companyID],
      //   ["userName", userName],
      //   ["databaseID", databaseID],
      // ];

      try {
        //AsyncStorage.multiSet(items, () => {});
      } catch (e) {
        console.log(e);
      }
      // dispatch({ type: "LOGIN", id: userEmail, token: userToken });
    },
    toggleTheme: () => {
      setIsDarkTheme((isDarkTheme) => !isDarkTheme);
    },
  }));

  useEffect(() => {
    //TODO move this to show after they have logged in.
    // MainFunctions.CreateUserTable();
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
        if (userToken != null) {
          //TODO  disable while developing app
          // if (netInfo.isConnected) {
          //   MainFunctions.CheckForMasterFileUpdates(false);
          // }
        }
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme} independent={true}>
          {loginState.userToken != null ? (
            <RootStackAccess />
          ) : (
            <RootStackSreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}
