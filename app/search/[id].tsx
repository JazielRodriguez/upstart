import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Page() {
  const params = useLocalSearchParams();
  console.log("no se");

  return (
    <View>
      <Text>Hola {params.id}</Text>
    </View>
  );
}
