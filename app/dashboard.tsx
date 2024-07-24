import { Pressable, ScrollView, View, Text, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import CarList from "@/components/CarList";
export default function Page() {
  const [actualPage, setActualPage] = useState(1);
  const [list, setList] = useState([]);

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
        console.log(result);
        if (list.length === 0) {
          setList(result);
        } else {
          setList((prev) => prev.concat(result));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [actualPage]);
  const onGetMoreCars = () => {
    setActualPage((prev) => prev + 1);
  };
  return (
    <SafeAreaView>
      <View style={{ marginTop: 100 }}>
        <ScrollView>
          <Text
            style={{
              marginBottom: 20,
              textAlign: "center",
              fontFamily: "RalewayB",
              fontSize: 24,
            }}
          >
            Autos con compatibilidad
          </Text>
          <CarList cars={list} />
          {list.length > 0 && (
            <Pressable onPress={onGetMoreCars}>
              <Text>Mostrar mas</Text>
            </Pressable>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
