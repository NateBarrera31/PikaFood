import React from "react";
import { AuthContext } from "./context";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  const handleLogin = (e) => {
    const logininfo = [];
    signIn(logininfo);
  };
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
          <TouchableOpacity style={styles.loginOptionbutton}>
            <IconMaterial
              name="email-outline"
              color={"white"}
              size={25}
              style={{ marginHorizontal: "5%" }}
            />
            <Text style={styles.loginButtonOptiontext}>Sign in with email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginOptionbutton}>
            <IconAwesome
              name="facebook-official"
              color={"white"}
              size={25}
              style={{ marginHorizontal: "5%" }}
            />
            <Text style={styles.loginButtonOptiontext}>
              Sign in with Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginOptionbutton}>
            <IconAwesome
              name="google"
              color={"white"}
              size={25}
              style={{ marginHorizontal: "5%" }}
            />
            <Text style={styles.loginButtonOptiontext}>
              Sign in with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginOptionbutton}
            onPress={handleLogin}
          >
            <IconMaterialIcons
              name="person"
              color={"white"}
              size={25}
              style={{ marginHorizontal: "5%" }}
            />
            <Text style={styles.loginButtonOptiontext}>Sign in as a guess</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003153",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
    fontSize: 28,
    color: "white",
    fontFamily: "Cochin",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 15,
    marginHorizontal: "10%",
  },
  color_textPrivate: {
    color: "#D0D0D0",
  },
  signInOptionSection: {
    justifyContent: "center",
    marginTop: 20,
  },
  loginOptionbutton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginVertical: "1%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  loginButtonOptiontext: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Login;
