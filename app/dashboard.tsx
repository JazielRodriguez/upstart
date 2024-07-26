import {
  Pressable,
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";
import CarList from "@/components/CarList";
import Search from "@/components/Search";
export default function Page() {
  const [actualPage, setActualPage] = useState(1);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [secIsLoading, setSecIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const url = `https://car-data.p.rapidapi.com/cars?&limit=10&page=${actualPage}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "be2932f541mshb44c3aebb4d905ap1ff2a7jsn43fb3a1a513a",
          "x-rapidapi-host": "car-data.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (list.length === 0) {
          setList(result);
          setIsLoading(false);
        } else {
          setList((prev) => prev.concat(result));
          setSecIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [actualPage]);
  const onGetMoreCars = () => {
    setActualPage((prev) => prev + 1);
    setSecIsLoading(true);
  };
  return (
    <SafeAreaView>
      <View style={{ marginTop: 100 }}>
        <Search />
        <ScrollView>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              textAlign: "center",
              fontFamily: "RalewayB",
              fontSize: 24,
            }}
          >
            Autos con compatibilidad
          </Text>
          <CarList
            cars={list}
            isLoading={isLoading}
            secIsLoading={secIsLoading}
          />
          {list.length > 0 && (
            <Pressable style={styles.buttomMore} onPress={onGetMoreCars}>
              <Text style={styles.legendMore}>Mostrar mas</Text>
            </Pressable>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttomMore: {
    marginBottom: 150,
    marginLeft: 15,
    marginRight: 15,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#222",
  },
  legendMore: {
    textAlign: "center",
    color: "#222",
    fontFamily: "Raleway",
  },
});
