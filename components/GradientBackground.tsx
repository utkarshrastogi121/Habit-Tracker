// components/GradientBackground.tsx
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export default function GradientBackground({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient
      colors={['#b084f6', '#d8b4f8', '#f5f0fb']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.background}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
