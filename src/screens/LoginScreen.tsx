import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
// or any pure javascript modules available in npm
import { TextInput, Button } from "react-native-paper";

import { Header } from "../components/Header";

export const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secure, setSecure] = React.useState(true);

  function toggleSecureIcon() {
    setSecure(!secure);
  }

  return (
    <React.Fragment>
      <View style={styles.containerTop}>
        {/* <Text style={styles.title}>SPACECRAFT</Text> */}
        <Header title={"SpaceCraft"} />
        <View style={styles.containerContent}>
          <TextInput
            style={styles.input}
            label="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            style={styles.input}
            label="Password"
            value={password}
            secureTextEntry={secure}
            onChangeText={(value) => setPassword(value)}
            right={
              <TextInput.Icon
                onPress={toggleSecureIcon}
                icon={secure ? "eye-off" : "eye"}
              />
            }
          />
          <Button
            style={styles.btn}
            mode="outlined"
            onPress={() => console.log("Pressed")}
          >
            LOGIN
          </Button>
          <Text style={styles.paragraph}>Read Terms and conditions.</Text>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  containerContent: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 20,
  },
  input: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    margin: 24,
    padding: 8,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#794FF2",
    color: "#fff",
  },
  paragraph: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
