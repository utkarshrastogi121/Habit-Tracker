import { DATABASE_ID, databases, HABITS_COLLECTION_ID } from "@/lib/appwrite";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ID } from "react-native-appwrite";
import {
  Button,
  SegmentedButtons,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";

const FREQUENCIES = ["daily", "weekly", "monthly"];
type Frequency = (typeof FREQUENCIES)[number];
export default function AddHabitScreen() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [frequency, setFrequency] = useState<Frequency>("daily");
  const [error, setError] = useState<string>("");
  const { user } = useAuth();
  const router = useRouter();
  const theme = useTheme();

  const handleSubmit = async () => {
    if (!user) return;

    try {
      await databases.createDocument(
        DATABASE_ID,
        HABITS_COLLECTION_ID,
        ID.unique(),
        {
          user_id: user.$id,
          title,
          description,
          frequency,
          streak_count: 0,
          last_completed: new Date().toISOString(),
          created_at: new Date().toISOString(),
        }
      );

      router.back();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        return;
      }

      setError("There was an error creating the habit");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Title"
        mode="outlined"
        onChangeText={setTitle}
        style={styles.input}
        textColor="black"
        outlineColor="#7928ea"
        activeOutlineColor="#7928ea"
      />
      <TextInput
        label="Description"
        mode="outlined"
        onChangeText={setDescription}
        style={styles.input}
        textColor="black"
        outlineColor="#7928ea"
        activeOutlineColor="#7928ea"
      />
      <View style={styles.frequencyContainer}>
        <SegmentedButtons
          value={frequency}
          onValueChange={(value) => setFrequency(value as Frequency)}
          style={styles.segmentedButtons}
          buttons={FREQUENCIES.map((freq) => ({
            value: freq,
            label: freq.charAt(0).toUpperCase() + freq.slice(1),
            labelStyle: styles.segmentedButtonLabel,
          }))}
        />
      </View>
      <Button
        style={styles.button}
        labelStyle={styles.buttonLabel}
        mode="contained"
        onPress={handleSubmit}
        disabled={!title || !description}
      >
        Add Habit
      </Button>
      {error && <Text style={{ color: theme.colors.error }}> {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f0fb",
    justifyContent: "center",
    color: "black",
  },
  input: {
    backgroundColor: "#f5f5f5",
    marginBottom: 16,
  },
  segmentedButtons: {
    backgroundColor: "#7928eaff",
    borderRadius: 40,
  },
  segmentedButtonLabel: {
    color: "white",
  },
  frequencyContainer: {
    backgroundColor: "#f5f5f5",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#7928eaff",
  },
  buttonLabel: {
    color: "white",
    fontWeight: "bold",
  },
});
