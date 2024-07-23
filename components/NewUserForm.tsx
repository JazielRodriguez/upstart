import {
  Pressable,
  TextInput,
  Image,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { Link } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  edad: Yup.number()
    .required("La edad es obligatoria")
    .positive("La edad debe ser positiva")
    .integer("La edad debe ser un número entero"),
  email: Yup.string()
    .email("El email debe tener un formato válido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export default function NewUserForm() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/logo.jpeg")}
      />
      <Text style={styles.welcome}>Bienvenido</Text>

      <Formik
        initialValues={{ nombre: "", edad: "", email: "", password: "" }}
        validationSchema={validationSchema} // Add validationSchema prop
        onSubmit={(values) => console.log(values)} // Update for clarity
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Nombre"
                style={styles.input}
                onChangeText={handleChange("nombre")}
                onBlur={handleBlur("nombre")}
                value={values.nombre}
              >
                {" "}
                {touched.nombre && errors.nombre ? (
                  <Text style={styles.errorText}>{errors.nombre}</Text>
                ) : null}
              </TextInput>
              <TextInput
                placeholder="Edad"
                style={styles.input}
                onChangeText={handleChange("edad")}
                onBlur={handleBlur("edad")}
                value={values.edad}
                keyboardType="numeric" // Set keyboard type for numbers
              >
                {" "}
                {touched.nombre && errors.nombre ? (
                  <Text style={styles.errorText}>{errors.nombre}</Text>
                ) : null}
              </TextInput>
              <TextInput
                placeholder="Email"
                style={styles.input}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address" // Set keyboard type for email
              >
                {" "}
                {touched.nombre && errors.nombre ? (
                  <Text style={styles.errorText}>{errors.nombre}</Text>
                ) : null}
              </TextInput>
              <TextInput
                placeholder="Contraseña"
                style={styles.input}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
              >
                {touched.nombre && errors.nombre ? (
                  <Text style={styles.errorText}>{errors.nombre}</Text>
                ) : null}
              </TextInput>
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
