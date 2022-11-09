import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TextInputComponent,
} from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal" style={styles.textInput} />
        <Button title="Add goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text> List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    padding: 30,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "60%",
    padding: 8,
    marginRight: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});
