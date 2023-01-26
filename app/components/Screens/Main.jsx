import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Callout } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Location from "expo-location";
import { ActivityIndicator } from "react-native-paper";
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

const Main = ({ navigation }) => {
  let text = "Waiting..";
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [region, setRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  let FindCurrentLocation = async () => {
    //finds current location
    setIsLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log(status);
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    location = location.coords;
    setRegion({
      ...region,
      latitude: location.latitude,
      longitude: location.longitude,
    });
    setIsLoading(false);
    return;
  };

  React.useEffect(() => {
    const RefreshMap = navigation.addListener("focus", () => {
      FindCurrentLocation();
    });
    return RefreshMap;
  }, []);

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={region}
        showsUserLocation={true}
      ></MapView>
      {/* //TODO if need a search field*/}
      {/* <Callout style={styles.searchCallout}>
        <TextInput
          onChangeText={{}}
          onSubmitEditing={{}}
          style={styles.calloutSearch}
          placeholder={"Search"}
          value={{}}
        />
      </Callout> */}
      <Callout style={styles.buttonCallout}>
        {/* <TouchableOpacity
          style={[styles.touchable]}
          onPress={() => console.log("press")}
        >
          <Text style={styles.touchableText}>Press Me 1</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={[styles.touchable]}
          onPress={() => FindCurrentLocation()}
        >
          <Icon name={"my-location"} size={50} color={"white"} />
        </TouchableOpacity>
      </Callout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "auto",
    width: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonCallout: {
    flex: 1,
    position: "absolute",
    bottom: 30,
    alignSelf: "baseline",
    backgroundColor: "transparent",
    marginLeft: 20,
    borderRadius: 20,
  },
  touchableText: {
    fontSize: 24,
  },
  touchable: {
    backgroundColor: "#585858",
    padding: 10,
    margin: 10,
    borderRadius: "50%",
  },
  // searchCallout: {
  //   flexDirection: "row",
  //   backgroundColor: "rgba(255, 255, 255, 0.9)",
  //   borderRadius: 10,
  //   width: "80%",
  //   marginLeft: "5%",
  //   marginTop: 40,
  // },
  calloutSearch: {
    borderColor: "transparent",
    marginLeft: 10,
    width: "90%",
    marginRight: 10,
    height: 40,
    borderWidth: 0.0,
  },
});
export default Main;
