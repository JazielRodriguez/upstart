import Foundation from "@expo/vector-icons/Foundation";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { Linking, Pressable, Text, TextInput } from "react-native";

export default function Search() {
  const [errorSearch, setErrorSearch] = useState(false);
  const openLink = async (url: string) => {
    setErrorSearch(false);
    if (url.trim() === "") {
      setErrorSearch(true);
      return;
    }
    const path = `https://www.google.com/search?q=${url}`;
    try {
      const supported = await Linking.canOpenURL(path);

      if (supported) {
        await Linking.openURL(path);
      } else {
        console.log("Don't know how to open URI: " + path);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values) => {
          openLink(values.search);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.inputContainer}>
              <View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Buscar falla"
                    onChangeText={handleChange("search")}
                    onBlur={handleBlur("search")}
                    value={values.search}
                  />
                </View>
              </View>
              <Pressable onPress={handleSubmit} style={styles.pressable}>
                <Text>
                  <Foundation name="magnifying-glass" size={24} color="black" />
                </Text>
              </Pressable>
            </View>
            {errorSearch && (
              <Text style={styles.errorText}>Campo obligatorio</Text>
            )}
          </View>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // marginLeft: 20,
    // marginRight: 20,
    // marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    width: 250,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 12,
    padding: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: "Raleway",
  },
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    width: 50,
    borderColor: "#000",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    fontSize: 12,
    padding: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: "Raleway",
  },
  errorText: {
    marginTop: 5,
    color: "#f00",
    textAlign: "center",
    fontSize: 12,
  },
});
