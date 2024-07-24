import { View, Text, StyleSheet } from "react-native";
interface Props {
  cars: {
    id: string;
    make: string;
    model: string;
    year: number;
  }[];
}
const CarList: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      {props.cars.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.title}>
            <Text style={styles.bold}>{item.model}</Text> - {item.make}
          </Text>
          <Text style={{ fontFamily: "Raleway" }}>{item.model}</Text>
          <Text style={{ fontFamily: "Raleway" }}>{item.year}</Text>
        </View>
      ))}
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
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "#ff0",
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
