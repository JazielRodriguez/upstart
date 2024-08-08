import { View, Text, Pressable, StyleSheet } from "react-native";
import { faq } from "@/utils/faq";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
export default function Page() {
  const [answerIsVisible, setAnswerIsVisible] = useState("default");
  const answerIsVisibleHandler = (key: string) => {
    setAnswerIsVisible(key);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Sugerencias</Text>
          <View style={styles.flex}>
            {faq.map((q) => (
              <View key={q.answer} style={styles.faq}>
                <View style={styles.press}>
                  <View>
                    <Text style={styles.letter}>{q.question}</Text>
                  </View>
                  <View>
                    <Pressable
                      onPress={() => {
                        if (answerIsVisible === q.question) {
                          setAnswerIsVisible("default");
                        } else {
                          answerIsVisibleHandler(q.question);
                        }
                      }}
                    >
                      <AntDesign name="caretdown" size={24} />
                    </Pressable>
                  </View>
                </View>
                {answerIsVisible === q.question && (
                  <Text style={styles.ans}>{q.answer}</Text>
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontFamily: "RalewayB",
    marginBottom: 20,
    fontSize: 24,
  },
  letter: {
    fontFamily: "Raleway",
  },
  ans: {
    marginTop: 10,
    fontFamily: "Raleway",
  },
  container: {
    marginBottom: 50,
    marginTop: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  faq: {
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000",
    shadowColor: "#222",
  },
  press: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flex: {
    gap: 15,
  },
});
