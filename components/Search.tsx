import Foundation from "@expo/vector-icons/Foundation";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Formik } from "formik";
import { Pressable, Text, TextInput } from "react-native";

export default function Search() {
  const [errorSearch, setErrorSearch] = useState(false);
  const [result, setResult] = useState("");

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values) => {
          if (values.search.length <= 0) {
            setErrorSearch(true);
            return;
          }
          setResult(values.search);
        }}
      >
        {({ handleChange, handleBlur, values }) => (
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

              <Pressable style={styles.pressable}>
                <Link
                  href={{
                    pathname: "/search/[id]",
                    params: { id: result },
                  }}
                >
                  <Foundation name="magnifying-glass" size={24} color="black" />
                </Link>
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
