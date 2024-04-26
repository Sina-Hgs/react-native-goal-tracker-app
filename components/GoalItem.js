import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 12,
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
  },
});
