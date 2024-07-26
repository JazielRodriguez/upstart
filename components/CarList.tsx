import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
interface Props {
  cars: {
    id: string;
    make: string;
    model: string;
    year: number;
  }[];
  isLoading: boolean;
  secIsLoading: boolean;
}
const CarList: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      {props.isLoading && <ActivityIndicator size="large" color="#222" />}
      {props.cars.map((item) => (
        <View key={item.id} style={styles.card}>
          <View>
            <Text style={styles.title}>
              <Text style={styles.bold}>{item.model}</Text> - {item.make}
            </Text>
            <Text style={{ fontFamily: "Raleway" }}>{item.model}</Text>
            <Text style={{ fontFamily: "Raleway" }}>{item.year}</Text>
          </View>
          <View>
            <Link
              href={{
                pathname: "/car/[id]",
                params: { id: item.id, model: item.model },
              }}
              asChild
            >
              <AntDesign name="caretright" size={24} color="222" />
            </Link>
          </View>
        </View>
      ))}
      {props.secIsLoading && <ActivityIndicator size="large" color="#222" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 50,
    shadowColor: "#000",
    gap: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    marginTop: 5,
    // borderWidth: 1,
    borderColor: "#222",
    borderBottomWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "Raleway",
  },
  bold: {
    fontFamily: "RalewayB",
  },
});

export default CarList;
