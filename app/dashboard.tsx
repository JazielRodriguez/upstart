import { View, Text } from "react-native";
import { useEffect, useState } from "react";
export default function Page() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url = "https://car-data.p.rapidapi.com/cars?&limit=10&page=1";
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
        setList(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          flex: 1,
          marginTop: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Iniciaste sesion
      </Text>
      {list.map((item) => (
        <View key={item.id}>
          <Text>* {item.make}</Text>
          <Text>{item.model}</Text>
          <Text>{item.year}</Text>
        </View>
      ))}
    </View>
  );
}
