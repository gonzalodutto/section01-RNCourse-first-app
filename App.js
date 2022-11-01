import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyling}> Otro texto por aqui</Text>
      </View>
      <Text style={styles.textStyling}>Hola Gonza, como estas?</Text>
      <Button title="Tocame" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyling: {
    margin: 16,
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
});
