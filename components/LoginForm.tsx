import {
  Pressable,
  TextInput,
  Image,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useState } from "react";
import { Redirect } from "expo-router";
import { Formik } from "formik";

export default function NewUserForm() {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  if (isLogged) {
    return <Redirect href="/dashboard" />;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/logo.jpeg")}
      />
      <Text style={styles.welcome}>Hola, otra vez</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          setErrorEmail(false);
          setErrorPassword(false);
          console.log(values);

          if (values.email.trim().length <= 6 || !values.email.includes("@")) {
            setErrorEmail(true);
            return;
          }
          if (values.password.trim().length <= 7) {
            setErrorPassword(true);
            return;
          }
          setIsLogged(true);
        }} // Update for clarity
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.inputContainer}>
              <View>
                <TextInput
                  placeholder="Email"
                  style={styles.input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address" // Set keyboard type for email
                />
                {errorEmail && (
                  <Text style={styles.errorText}>
                    Algo esta mal con el email, intentalo de nuevo
                  </Text>
                )}
              </View>
              <View>
                <TextInput
                  placeholder="Contraseña"
                  style={styles.input}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={true}
                />
                {errorPassword && (
                  <Text style={styles.errorText}>
                    Contraseña incorrecta, intentalo de nuevo
                  </Text>
                )}
              </View>
            </View>

            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.legend}>Iniciar Sesión</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    marginBottom: 20,
    gap: 20,
  },
  input: {
    height: 50,
    marginBottom: 5,
    borderRadius: 24,
    width: 300,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 12,
    padding: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: "Raleway",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "SpaceMono",
  },
  image: {
    width: 120,
    height: 120,
  },
  welcome: {
    marginTop: 16,
    fontSize: 24,
    fontFamily: "RalewayB",
  },
  button: {
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#222",
    marginBottom: 20,
  },
  legend: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "RalewayB",
  },
  errorText: {
    color: "#f00",
    paddingLeft: 12,
    opacity: 0.5,
    fontSize: 12,
  },
});
