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
      <View>
        <Text> List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 100,
    padding: 50,
  },
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "60%",
    padding: 8,
    marginRight: 10,
  },
});
