import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#00ca0d" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressed) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#000000",
    backgroundColor: "#55ff00",
  },
  goalText: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
  },
  pressedItem: { opacity: 0.5 },
});
