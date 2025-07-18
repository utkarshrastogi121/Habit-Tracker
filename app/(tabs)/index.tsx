import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Welcome</Text>
      <Link href="/login">Login</Link> 
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})