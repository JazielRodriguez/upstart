import { View, StyleSheet } from "react-native";
import LoginForm from "@/components/LoginForm";
export default function Page() {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
