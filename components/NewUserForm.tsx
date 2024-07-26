import {
  Pressable,
  TextInput,
  Image,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { Formik } from "formik";

export default function NewUserForm() {
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorEdad, setErrorEdad] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/logo.jpeg")}
      />
      <Text style={styles.welcome}>Bienvenido</Text>

      <Formik
        initialValues={{ nombre: "", edad: "", email: "", password: "" }}
        onSubmit={(values) => {
          setErrorNombre(false);
          setErrorEdad(false);
          setErrorEmail(false);
          setErrorPassword(false);
          if (
            values.nombre.trim() === "" ||
            values.nombre.trim().length === 0
          ) {
            setErrorNombre(true);
            return;
          }
          if (values.edad.trim() === "" || +values.edad <= 0) {
            setErrorEdad(true);
            return;
          }
          if (values.email.trim().length <= 6 || !values.email.includes("@")) {
            setErrorEmail(true);
            return;
          }
          if (values.password.trim().length <= 7) {
            setErrorPassword(true);
            return;
          }
          alert("Te has registrado correctamente");
        }} // Update for clarity
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.inputContainer}>
              <View>
                <TextInput
                  placeholder="Nombre"
                  style={styles.input}
                  onChangeText={handleChange("nombre")}
                  onBlur={handleBlur("nombre")}
                  value={values.nombre}
                />
                {errorNombre && (
                  <Text style={styles.errorText}>
                    El campo esta vacio, intentalo de nuevo
                  </Text>
                )}
              </View>
              <View>
                <TextInput
                  placeholder="Edad"
                  style={styles.input}
                  onChangeText={handleChange("edad")}
                  onBlur={handleBlur("edad")}
                  value={values.edad}
                  keyboardType="numeric" // Set keyboard type for numbers
                />
                {errorEdad && (
                  <Text style={styles.errorText}>Ingresa tu edad</Text>
                )}
              </View>
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
                  <Text style={styles.errorText}>Ingresa un email valido</Text>
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
                    Ingresa una contraseña valida
                  </Text>
                )}
              </View>
            </View>
            <Pressable style={styles.buttonRegister} onPress={handleSubmit}>
              <Text style={styles.legendRegister}>Registrarse</Text>
            </Pressable>
            <Link href="/create-account" asChild>
              <Pressable style={styles.buttonLogIn}>
                <Text style={styles.legendLogIn}>Iniciar Sesión</Text>
              </Pressable>
            </Link>
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
    marginTop: 100,
    alignItems: "center",
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
  buttonRegister: {
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#222",
    marginBottom: 20,
  },
  buttonLogIn: {
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#222",
  },
  legendRegister: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "RalewayB",
  },
  legendLogIn: {
    textAlign: "center",
    color: "#222",
    fontFamily: "Raleway",
  },
  errorText: {
    color: "#f00",
  },
});
