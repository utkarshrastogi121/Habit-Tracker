import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";

export default function ScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#f5f0fb",
  },
  content: {
    flex: 1,
    backgroundColor: "#f5f0fb",
    paddingHorizontal: 16,
  },
});
