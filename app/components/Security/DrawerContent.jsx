import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "./context";
//import * as MainFunctions from "./Share";

export function DrawerContect(props) {
  const { singOut, toggleTheme } = React.useContext(AuthContext);
  const paperTheme = useTheme();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const GetUserInfor = async () => {
    // let email = await MainFunctions.GetUserInformation("userEmail");
    //let name = await MainFunctions.GetUserInformation("userName");
    setEmail("testing@email.com");
    setName("Nate Barrera");
  };

  React.useEffect(() => {
    GetUserInfor();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={
                  {
                    //uri: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.18169-9/20108588_1636618739713108_1674372340283438707_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=O-LTpcbqeQ4AX9zKf_0&_nc_ht=scontent-atl3-2.xx&oh=00_AT8eOMVw64SQppeAGqYyax-fA-7wiapXMToOKVMSaqfSyQ&oe=61DDFAB5",
                  }
                }
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{Name}</Title>
                <Caption style={styles.caption}>{Email}</Caption>
              </View>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate("Main");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-settings" color={color} size={size} />
            )}
            label="Settings"
            onPress={() => {
              props.navigation.navigate("Settings");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-check-outline" color={color} size={size} />
            )}
            label="Support"
            onPress={() => {
              props.navigation.navigate("Support");
            }}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}
          >
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={paperTheme.dark} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            singOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
