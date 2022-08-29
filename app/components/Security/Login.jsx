import React from "react";
import { AuthContext } from "./context";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  textInput,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  Dimensions,
} from "react-native";

const Login = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.signInText}> Sign in</Text>

        {/* Terms and condition message */}
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By signing up you agree to our
          </Text>
          <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
            {" "}
            Terms of service
          </Text>
          <Text style={styles.color_textPrivate}> and</Text>
          <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
            {" "}
            Privacy policy
          </Text>
        </View>

        {/* sign in options */}
        <View style={styles.signInOptionSection}>
          <TouchableOpacity>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002147",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
    fontSize: 25,
    color: "white",
    // marginHorizontal: "25%",
    // marginVertical: "20%",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 15,
    marginHorizontal: "10%",
  },
  color_textPrivate: {
    color: "grey",
  },
  signInOptionSection: {
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Login;
