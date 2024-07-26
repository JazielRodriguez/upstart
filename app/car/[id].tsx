import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text, ActivityIndicator } from "react-native";

interface CarAtributtes {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export default function Page() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [dataAtributtes, setDataAtributtes] = useState<CarAtributtes>();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  useEffect(() => {
    const getData = async () => {
      const api_url = `https://api.api-ninjas.com/v1/cars?model=${params.model}`;
      const response = await fetch(api_url, {
        headers: {
          "X-API-KEY": "mkaKQ4A/BTfDL24Wr7KRgw==V6ujQFLZ6elhBApQ",
        },
      });
      const data = await response.json();

      setDataAtributtes(data[0]);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/logo.jpeg")}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#222" />
      ) : (
        <View style={styles.margin}>
          <Text style={styles.text}>
            Modelo:{" "}
            <Text style={styles.dynamic}>
              {dataAtributtes?.model
                ? dataAtributtes?.model
                : "No hay informacion"}
            </Text>
          </Text>
          <Text style={styles.text}>
            Kilometros por litro:{" "}
            <Text style={styles.dynamic}>
              {dataAtributtes?.city_mpg
                ? dataAtributtes.city_mpg
                : "No hay informacion"}
            </Text>
          </Text>
          <Text style={styles.text}>
            Cilindros:{" "}
            <Text style={styles.dynamic}>
              {dataAtributtes?.cylinders
                ? dataAtributtes.cylinders
                : "No hay informacion"}
            </Text>
          </Text>
          <Text style={styles.text}>
            Clase:{" "}
            <Text style={styles.dynamic}>
              {dataAtributtes?.class
                ? dataAtributtes.class
                : "No hay informacion"}
            </Text>
          </Text>
          <Text style={styles.text}>
            Cilindros:{" "}
            <Text style={styles.dynamic}>
              {dataAtributtes?.displacement
                ? dataAtributtes.displacement
                : "No hay informacion"}
            </Text>
          </Text>
          <Text style={styles.text}>
            Tipo de combustible:{" "}
            <Text style={styles.dynamic}>
              {dataAtributtes?.fuel_type
                ? dataAtributtes.fuel_type
                : "No hay informacion"}
            </Text>
          </Text>
          <Text style={styles.text}>
            Conduccion:{" "}
            <Text style={styles.dynamic}>
              {dataAtributtes?.drive
                ? dataAtributtes.drive
                : "No hay informacion"}
            </Text>
          </Text>
          <Text style={styles.text}>
            Fabricante:{" "}
            <Text style={styles.dynamic}>
              {dataAtributtes?.make
                ? dataAtributtes.make
                : "No hay informacion"}
            </Text>
          </Text>
          <Text style={styles.text}>
            Año:{" "}
            <Text style={styles.dynamic}>
              {dataAtributtes?.year
                ? dataAtributtes.year
                : "No hay informacion"}
            </Text>
          </Text>
          <Text style={styles.text}>
            Transmision:{" "}
            <Text style={styles.dynamic}>
              {dataAtributtes?.transmission
                ? dataAtributtes.transmission
                : "No hay informacion"}
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
  },
  margin: {
    marginRight: 15,
    marginLeft: 15,
    gap: 20,
  },
  text: {
    fontFamily: "RalewayB",
    fontSize: 18,
  },
  dynamic: {
    fontFamily: "Raleway",
    textTransform: "uppercase",
  },
});
